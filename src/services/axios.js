import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true, // cho phép axios gửi và nhận cookie
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === "401" || error.response.status === "403") &&
      !error.config?.url?.startsWith("/auth/")
    ) {
      // Lưu URL hiện tại để redirect sau khi đăng nhập lại
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      window.location.assign("/login");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
