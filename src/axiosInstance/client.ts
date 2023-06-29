import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("jwt");

  if (accessToken && config.headers) {
    const modifiedConfig = { ...config };
    modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;
    return modifiedConfig;
  }

  return config;
});

export default client;
