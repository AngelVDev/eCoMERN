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
export const userRegister = async (user) => {
  try {
    const res = await publicRequest.post("/auth/register", user);
    register(res.data);
  } catch (err) {
    console.log(err);
  }
};
