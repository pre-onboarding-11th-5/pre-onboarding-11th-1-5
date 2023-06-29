/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import { ErrorResponse } from "types/types";

const deleteTodoAPI = (id: number) =>
  client.delete(`/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  });

const useDeleteTodo = () => {
  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoAPI(id);
      alert("삭제 되었습니다!");
      return true;
    } catch (e) {
      if (axios.isAxiosError<ErrorResponse>(e) && e.response) {
        alert(e.response?.data.message);
      }
      return null;
    }
  };

  return [deleteTodo];
};

export default useDeleteTodo;
