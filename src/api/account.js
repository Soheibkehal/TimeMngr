import axios from "axios";
import { URL, user_id, loggedHeaders } from "../config/constants";

axios.defaults.withCredentials = true;
axios.defaults.headers = {
  "Content-Type": "application/json",
};

export const login = async (email, password) => {
  const data = JSON.stringify({ user: { email, password } });

  const config = {
    method: "post",
    url: `${URL}/users/signin`,
    data,
  };

  const res = await axios(config);
  return res.data.data;
};

export const register = async (user) => {
  const data = JSON.stringify({ user });

  const config = {
    method: "post",
    url: `${URL}/users/signup`,
    data,
  };

  const res = await axios(config);
  return res.data.data;
};
export const getUser = async () => {
  const config = {
    method: "get",
    url: `${URL}/users/${user_id}`,
    headers: loggedHeaders,
  };

  const res = await axios(config);
  return res.data.data;
};

export const getUsersByEmail = async (email) => {
  const config = {
    method: "get",
    url: `${URL}/users?email=${email}`,
    headers: loggedHeaders,
  };

  const res = await axios(config);
  return res.data.data;
};

export const getUsers = async () => {
  const config = {
    method: "get",
    url: `${URL}/users`,
    headers: loggedHeaders,
  };

  const res = await axios(config);
  return res.data.data;
};

export const modifyUser = async (user) => {
  const data = JSON.stringify(user);

  const config = {
    method: "put",
    url: `${URL}/users/${user_id}`,
    headers: loggedHeaders,
    data,
  };

  const res = await axios(config);
  return res.data.data;
};

export const modifyUserAdmin = async (user) => {
  let userData = user.role_id ? user : { ...user, role_id: 1 }; //inject role_id
  const data = JSON.stringify({ user: userData });

  const config = {
    method: "put",
    url: `${URL}/users/${user.id}/admin`,
    headers: loggedHeaders,
    data,
  };

  const res = await axios(config);
  return res.data.data;
};

export const deleteUser = async () => {
  const config = {
    method: "delete",
    url: `${URL}/users/${user_id}`,
    headers: loggedHeaders,
  };

  const res = await axios(config);
  return res.data.data;
};
