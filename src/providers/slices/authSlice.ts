import { uploadToCloudinary } from "../../app/helpers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { supabase } from "../../app/supabase";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, thunkApi) => {
    const { email, password } = payload;
    if (email.length == 0 || password.length == 0) {
      return thunkApi.rejectWithValue("Please Provide All The Fields");
    }
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error != null) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async (
    payload: {
      email: string;
      password: string;
      name: string;
      imageUrl: string;
    },
    thunkApi
  ) => {
    const { name, email, password, imageUrl } = payload;
    if (
      email.length == 0 ||
      password.length == 0 ||
      name.length == 0 ||
      imageUrl.length == 0
    ) {
      return thunkApi.rejectWithValue("Please Provide All The Fields");
    }
    const { user, session, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error != null) {
      return thunkApi.rejectWithValue(error.message);
    }
    const downloadUrl = await uploadToCloudinary(imageUrl);
    if (downloadUrl == null) {
      return thunkApi.rejectWithValue(`Failed To Upload Image.`);
    }
    const uid = user?.id;
    const insertQuery = await supabase.from(`users`).insert({
      id: uid,
      name,
      email,
      profile_image_url: downloadUrl,
    });
    if (insertQuery.error != null) {
      return thunkApi.rejectWithValue(`Error Uploading User Data to Supabase`);
    }
  }
);

export interface AuthState {
  user: User | null;
  loading: boolean;
}
const initialState: AuthState = {
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: { payload: User | null }) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
