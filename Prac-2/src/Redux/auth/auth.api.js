import axios from "axios";
export const LoginApi = async (cred) => {
  let promise = await axios.post(`https://reqres.in/api/login`, cred);
  return promise.data;
};
