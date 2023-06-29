/* eslint-disable no-alert */
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import client from "axiosInstance/client";
import type { TodoType } from "../components/Todo/types";

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
  const [todoData, setTodoData] = useState<TodoType[]>();
  const [trigger, setTrigger] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const getTodos = async (): Promise<void | {
    data: null;
    error: AxiosError;
    // eslint-disable-next-line consistent-return
  }> => {
    try {
      const todos = await getTodosAPI();
      setTodoData(todos);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setErrorMsg(e.message);
      }
      throw e;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jwt")) getTodos();
  }, [trigger]);

  async function refetch() {
    setTrigger((prev) => !prev);
  }

  return { todoData, refetch, errorMsg };
};

export default useGetTodos;
