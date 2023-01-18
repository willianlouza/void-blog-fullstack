import { parseCookies } from "nookies";
import axios from "axios";
import { env } from "@/config/env";

const { "nextblog.token": token } = parseCookies();

export const api = axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use((config) => {
  return config;
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
