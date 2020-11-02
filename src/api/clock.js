import axios from "axios";
import { URL } from "../config/constants";
import moment from "moment";
import { getUserData } from "./localStorage";

const { user_id, crsf_token: token } = getUserData();

export const getClock = async () => {
  const res = await axios.get(`${URL}/clocks/${user_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data,
  };
  await axios(config);
};
