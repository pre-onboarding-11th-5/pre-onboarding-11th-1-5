/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import { TodoType } from "components/Todo/types";
import type { AxiosResponseType } from "types/types";

const deleteTodoAPI = async (todo: TodoType): Promise<boolean> => {
  try {
    await client.delete(`/todos/${todo.id}`);
    alert("삭제 되었습니다!");
    return true;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      alert(e.response?.data.message);
    }
    throw e;
  }
};

const useDeleteTodo = () => {
  const deleteTodo = async (
    todo: TodoType,
  ): Promise<AxiosResponseType<boolean>> => {
    try {
      const isSuccess = await deleteTodoAPI(todo);
      return { data: isSuccess, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return { data: null, error: e };
      }
      throw e;
    }
  };

  return [deleteTodo];
};

export default useDeleteTodo;
