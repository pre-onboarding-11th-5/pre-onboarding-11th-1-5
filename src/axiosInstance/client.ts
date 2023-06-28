import axios from "axios";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
