import axios from "axios";
import Cookie from "js-cookie";
const user_api_url = "/server" + "/user/api";

const login = async (user_data) => {
  const response = await axios.post(user_api_url + "/login-user", user_data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.token));
  }
  return response.data;
};

const logout = async (user_data) => {
  const response = await axios.post(user_api_url + "/logout-user", user_data);
};

const userServie = {
  login,
  logout,
};

export default userServie;
