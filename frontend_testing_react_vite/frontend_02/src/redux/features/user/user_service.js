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
  const response = await axios.get(user_api_url + "/logout-user");
  localStorage.removeItem("user", JSON.stringify(response.data.token));
  Cookie.remove(response.data.token);
};

const signup = async (register_data) => {
  const response = await axios.post(
    user_api_url + "/create-user",
    register_data
  );
  return response.data;
};

const userServie = {
  login,
  logout,
  signup,
};

export default userServie;
