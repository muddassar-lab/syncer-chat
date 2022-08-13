export const uploadToCloudinary = async (
  imagePath: string
): Promise<string | null> => {
  let downloadUrl: string | null = null;
  const data = new FormData();
  data.append(`file`, imagePath);
  data.append("upload_preset", "syncer");
  data.append("cloud_name", "dqeukpfgo");
  await fetch("https://api.cloudinary.com/v1_1/dqeukpfgo/image/upload", {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      downloadUrl = data.url.toString();
    })
    .catch((error) => {});
  return downloadUrl;
};

const isEmpty = (value: string): boolean => {
  if (value.length == 0) {
    return true;
  } else {
    return false;
  }
};
