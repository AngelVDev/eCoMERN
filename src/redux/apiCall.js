import { publicRequest } from "../requestMethods";
import { register, loginFailure, loginStart, loginSuccess } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const userRegister = async (dispatch, user) => {
  try {
    const res = await publicRequest.post("/register", user);
    dispatch(register(res.data));
  } catch (err) {
    dispatch(console.log("error"));
  }
};
