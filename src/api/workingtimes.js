import axios from "axios";
import moment from "moment";

import { URL, user_id, loggedHeaders } from "../config/constants";
axios.defaults.headers = loggedHeaders;
axios.defaults.withCredentials = true;

export const getLastWorkingTime = async (time) => {
  const start = moment(time, "HH:mm:ss")
    .subtract(10, "seconds")
    .format("HH:mm:ss");

  const end = moment(time, "HH:mm:ss")
    .add(10, "seconds")
    .format("HH:mm:ss");

  const startDate = `${moment().format("YYYY-MM-DD")} ${start}`;
  const endDate = `${moment().format("YYYY-MM-DD")} ${end}`;

  const workingtimes = await getWorkingtimes(startDate, endDate);
  return workingtimes[0];
};

export const getWorkingtimes = async (start, end) => {
  const response = await axios.get(
    `${URL}/workingtimes/${user_id}?start=${start}&end=${end}`,
    { headers: loggedHeaders }
  );

  const workingtimes = response.data.data;

  return workingtimes;
};

export const addWorkingtime = async (start, end) => {
  const data = JSON.stringify({
    working_time: {
      start,
      end,
    },
  });

  const config = {
    method: "post",
    url: `${URL}/workingtimes/${user_id}`,
    headers: loggedHeaders,
    data,
  };

  await axios(config);
};

export const updateWorkingtime = async (start, end, id) => {
  const data = JSON.stringify({
    working_time: {
      start,
      end,
    },
    id,
  });

  const config = {
    method: "post",
    url: `${URL}/workingtimes/${user_id}`,
    headers: loggedHeaders,
    data,
  };

  await axios(config);
};

export const deleteWorkingtime = async (id) => {
  const config = {
    method: "delete",
    url: `${URL}/workingtimes/${user_id}/${id}`,
    headers: loggedHeaders,
  };

  await axios(config);
};
