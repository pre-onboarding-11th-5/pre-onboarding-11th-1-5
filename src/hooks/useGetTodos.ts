/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import type { AxiosResponseType } from "types/types";
import type { TodoType } from "../types";

const getTodosAPI = async (): Promise<TodoType[]> => {
  try {
    const response = await client.get("/todos", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      alert(e.response?.data.message);
    }
    throw e;
  }
};

const useGetTodos = () => {
  const getTodos = async (): Promise<AxiosResponseType<TodoType[]>> => {
    try {
      const todos = await getTodosAPI();
      return { data: todos, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return { data: null, error: e };
      }
      throw e;
    }
  };

  return [getTodos];
};

export default useGetTodos;
