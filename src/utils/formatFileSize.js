export const formatFileSize = (sizeInBytes) => {
  if (sizeInBytes >= 1_073_741_824) {
    return (sizeInBytes / 1_073_741_824).toFixed(2) + " GB";
  } else if (sizeInBytes >= 1_048_576) {
    return (sizeInBytes / 1_048_576).toFixed(0) + " MB";
  } else if (sizeInBytes >= 1024) {
    return (sizeInBytes / 1024).toFixed(0) + " KB";
  } else {
    return sizeInBytes + " Bytes";
  }
};
