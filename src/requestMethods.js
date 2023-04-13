import axios from "axios";
const BASE_URL = "https://e-commerce-tru.onrender.com/api";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
export const TOKEN = currentUser?.accessToken;
export const currentUserInfo = {
  username: currentUser.username,
  email: currentUser.email,
  isAdmin: currentUser.isAdmin,
};
export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
