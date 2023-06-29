/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import { TodoType } from "components/Todo/types";
import type { AxiosResponseType } from "types/types";

const updateTodoAPI = async (todo: TodoType): Promise<TodoType> => {
  try {
    const response = await client.put(`/todos/${todo.id}`, {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    });
    alert("수정 되었습니다!");
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      alert(e.response?.data.message);
    }
    throw e;
  }
};

const useUpdateTodo = () => {
  const updateTodo = async (
    todo: TodoType,
  ): Promise<AxiosResponseType<TodoType>> => {
    try {
      const todos = await updateTodoAPI(todo);
      return { data: todos, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return { data: null, error: e };
      }
      throw e;
    }
  };

  return [updateTodo];
};

export default useUpdateTodo;
