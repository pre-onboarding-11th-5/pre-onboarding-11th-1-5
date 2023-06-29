/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import { TodoType } from "components/Todo/types";
import type { AxiosResponseType } from "types/types";

const getTodosAPI = async (): Promise<TodoType[]> => {
  try {
    const data = await (await client.get("/todos")).data;
    return data;
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
