/* eslint-disable no-alert */
import client from "axiosInstance/client";
import alertError from "libs/alertError";

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
      alertError(e);
      return null;
    }
  };

  return deleteTodo;
};

export default useDeleteTodo;
