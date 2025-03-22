import apiClient from "./axios";

export const isAuthenticated = () => {
  return document.cookie.includes("JWT_TOKEN=");
};

export const register = async (data) => {
  try {
    await apiClient.post("/auth/register", data);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password) => {
  try {
    await apiClient.post("/auth/login", { username, password });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await apiClient.get("/auth/logout");
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    return ({ data } = await apiClient.get("/user/current"));
  } catch (error) {
    console.log(error);
  }
};
