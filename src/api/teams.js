import axios from "axios";

import { URL, user_id, loggedHeaders } from "../config/constants";

axios.defaults.headers = loggedHeaders;
axios.defaults.withCredentials = true;

export const getTeams = async () => {
  const config = {
    method: "get",
    url: `${URL}/teams/${user_id}`,
    headers: loggedHeaders,
  };

  const res = await axios(config);
  return res.data.data;
};

export const getUsers = async (team_id) => {
  const config = {
    method: "get",
    url: `${URL}/teams/${user_id}/user/${team_id}`,
    headers: loggedHeaders,
  };

  const res = await axios(config);
  return res.data.data;
};

export const createTeam = async (name) => {
  const data = JSON.stringify({ team: { name, user_id } });
  const config = {
    method: "post",
    url: `${URL}/teams`,
    data,
    headers: loggedHeaders,
  };

  const res = await axios(config);
  return res.data.data;
};

export const changeTeamName = async (name, id) => {
  const data = JSON.stringify({ team: { name, user_id } });
  const config = {
    method: "put",
    url: `${URL}/teams/${id}`,
    data,
    headers: loggedHeaders,
  };
  const res = await axios(config);
  return res.data.data;
};

export const changeTeamUser = async (team_id, id = user_id) => {
  const data = JSON.stringify({ team: { user_id: id } });
  const config = {
    method: "put",
    url: `${URL}/teams/user/${team_id}`,
    data,
    headers: loggedHeaders,
  };
  const res = await axios(config);
  return res.data.data;
};

export const deleteTeam = async (id) => {
  const config = {
    method: "delete",
    url: `${URL}/teams/${id}`,
    headers: loggedHeaders,
  };
  const res = await axios(config);
  return res.data.data;
};

export const deleteTeamUser = async (id) => {
  const config = {
    method: "delete",
    url: `${URL}/teams/user/${id}`,
    headers: loggedHeaders,
  };
  const res = await axios(config);
  return res.data.data;
};
