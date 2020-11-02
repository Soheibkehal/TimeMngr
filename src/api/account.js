import axios from "axios";
import { URL } from "../config/constants";
import moment from "moment";

export const getClock = async () => {
  const res = await axios.get(`${URL}/clocks/1`);
  const clock = res.data.data;
  return clock;
};

export const login = async (email, password) => {
  var data = JSON.stringify({ user: { email, password } });

  const config = {
    method: "post",
    url: "http://localhost:4000/api/users/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  const res = await axios(config);
  return res.data.data;
};
