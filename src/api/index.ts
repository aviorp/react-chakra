import { AxiosResponseSchema } from "@/types";
import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "https://api.gamescoregenius.win/api/v1",
  // baseURL: "/api",
  timeout: 90000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const addToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const resolve = (res: AxiosResponse) => {
  if (res.status === 200) {
    return res.data.data;
  }
};

const reject = (err: any) => {
  if (err?.response?.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return Promise.reject(err?.response?.data?.message ?? err);
};

api.interceptors.response.use(
  res => resolve(res),
  err => reject(err)
);
