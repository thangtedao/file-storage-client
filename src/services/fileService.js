import apiClient from "./axios";

export const getFiles = async () => {
  try {
    const response = await apiClient.get("/files");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getActiveFiles = async () => {
  try {
    await pause(500);
    const response = await apiClient.get("/files/active");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDeletedFiles = async () => {
  try {
    const response = await apiClient.get("/files/deleted");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadFile = async (data) => {
  try {
    const response = await apiClient.post("/files", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const downloadFile = async (id) => {
  try {
    const response = await apiClient.get(`/files/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteFile = async (id) => {
  try {
    const response = await apiClient.patch(`/files/${id}/delete`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const permanentDeleteFile = async (id) => {
  try {
    const response = await apiClient.delete(`/files/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const restoreFile = async (id) => {
  try {
    const response = await apiClient.patch(`/files/${id}/restore`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const emptyTrash = async () => {
  try {
    const response = await apiClient.delete(`/files`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const shareFile = async (id, emails) => {
  try {
    const response = await apiClient.post(`/files/${id}/share/users`, emails);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const downloadShareFile = async (token) => {
  try {
    const response = await apiClient.get(`/files/${token}/download`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const removeShareFile = async (fileId) => {
  try {
    const response = await apiClient.delete(`/files/share/${fileId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSharingInfo = async (id) => {
  try {
    const response = await apiClient.get(`/files/${id}/share-info`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFilesShareWithMe = async () => {
  try {
    const response = await apiClient.get(`/files/share`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchFiles = async (term) => {
  try {
    const response = await apiClient.get(`/files/search/${term}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// DEV ONLY !!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
