import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://smlgnizdfsvlgejynzxg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtbGduaXpkZnN2bGdlanluenhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyODAwOTEsImV4cCI6MTk3NTg1NjA5MX0.c3W_AHSEiDZWXW1ml1N9PTySEznoaDgok3WGow08Ihs",
  {
    localStorage: AsyncStorage,
    detectSessionInUrl: false,
  }
);
