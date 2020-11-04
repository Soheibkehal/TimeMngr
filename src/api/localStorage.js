export const getUserData = () => {
  return {
    user_id: localStorage.getItem("user_id"),
    role_id: localStorage.getItem("role_id"),
    crsf_token: localStorage.getItem("crsf_token"),
  };
};

export const setUserData = (user_id, role_id, crsf_token) => {
  localStorage.setItem("user_id", user_id);
  localStorage.setItem("role_id", role_id);
  localStorage.setItem("crsf_token", crsf_token);
};
