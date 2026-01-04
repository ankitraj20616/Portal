import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const refreshToken = localStorage.getItem("refresh_token");
      try {
        const response = await axiosInstance.post("/token/refresh/", {
          refresh: refreshToken,
        });
        localStorage.setItem("access_token", response.data.access);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.access}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
