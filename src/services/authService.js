import apiClient from "./axios";

export const isAuthenticated = () => {
  return document.cookie.includes("JWT_TOKEN=");
};

export const register = async (data) => {
  try {
    await apiClient.post("/auth/register", data);
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    await apiClient.post("/auth/login", { username, password });
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/auth/logout");
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await apiClient.get("/users/current");
    return response.data;
  } catch (error) {
    throw error;
  }
};
