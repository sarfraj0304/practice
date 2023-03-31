import axios from "axios";

export const GetTaskAPI = async (page) => {
  const promise = await axios.get(
    `https://mock-server-kkz2.onrender.com/todo_Item?_limit=1&_page=${page}`
  );
  return promise.data;
};

export const PatchTaskAPI = async ({ id, data }) => {
  console.log(id, data);
  const promise = await axios.patch(
    `https://mock-server-kkz2.onrender.com/todo_Item/${id}`,
    data
  );
  return promise.data;
};

export const deleteTaskAPI = async (id) => {
  const promise = await axios.delete(
    `https://mock-server-kkz2.onrender.com/todo_Item/${id}`
  );
  return promise.data;
};

export const GetTotalTaskAPI = async () => {
  const promise = await axios.get(
    `https://mock-server-kkz2.onrender.com/todo_Item`
  );
  return promise.data;
};
