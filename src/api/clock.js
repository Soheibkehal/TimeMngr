import axios from "axios";
import moment from "moment";

import { URL, user_id, loggedHeaders } from "../config/constants";
axios.defaults.headers = loggedHeaders;
axios.defaults.withCredentials = true;
export const getClock = async () => {
  const res = await axios.get(`${URL}/clocks/${user_id}`, {
    headers: loggedHeaders,
  });
  const clock = res.data.data;
  return clock;
};

export const postClock = async (bool) => {
  const data = JSON.stringify({
    clock: { status: bool, time: moment().format("HH:mm:ss") },
  });

  const config = {
    method: "post",
    url: `${URL}/clocks/${user_id}`,
    data,
  };
  await axios(config);
};
