import axios from "axios";

const API_URL = "http://localhost:3030";

export const mainData = () => ({
  login: {
    email: "",
    password: "",
    name: "",
  },
  create: {
    email: "",
    password: "",
    createPassword: "",
  },
});

export async function loginApi() {
  const data = mainData();
  const payload = {
    email: data.login.email,
    password: data.login.password,
    name: data.login.name,
  };
  const res = await axios.post(`${API_URL}/home/login`, payload);
  return res.data;
}

export async function createApi() {
  const data = mainData();
  const payload = {
    email: data.create.email,
    password: data.create.password,
    createPassword: data.create.createPassword,
  };
  const res = await axios.post(`${API_URL}/home/create`, payload);
  return res.data;
}

const callApi = () => ({
  loginApi,
  createApi,
});

export default callApi;
