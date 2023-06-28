/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import type { AxiosResponseType } from "types/types";
import type { TodoType } from "../types";

const createTodoAPI = async (todo: string): Promise<TodoType> => {
  try {
    const response = await client.post(
      "/todos",
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      },
    );
    alert("추가에 성공했습니다.");

    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      alert(e.response?.data.message);
    }
    throw e;
  }
};

const useCreateTodo = () => {
  const createTodo = async (
    todo: string,
  ): Promise<AxiosResponseType<TodoType>> => {
    try {
      const todos = await createTodoAPI(todo);
      return { data: todos, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return { data: null, error: e };
      }
      throw e;
    }
  };

  return [createTodo];
};

export default useCreateTodo;
