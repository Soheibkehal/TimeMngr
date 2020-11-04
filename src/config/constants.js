import { getUserData } from "../api/localStorage";
const data = getUserData();

export const URL = "http://localhost:4000/api";
export const user_id = data.user_id;
export const loggedHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${data.crsf_token}`,
};
