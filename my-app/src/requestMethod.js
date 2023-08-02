import axios from "axios";

const BASE_URL = "https://the-lama-shop.onrender.com";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export const userRequest = axios.create({
  baseURL: `${BASE_URL}/api`,
  header: { token: `Bearer ${TOKEN}` },
});
