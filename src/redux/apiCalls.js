import { publicRequest } from "../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
} from "./userRedux";

//register
export const register = async (dispatch, user) => {
    dispatch(registerStart());
  //  console.log("user",user);
    try {
        const res = await  publicRequest.post('/auth/register',user)
     //   console.log(res);
        dispatch(registerSuccess(res.data));
    }
    catch{
        dispatch(registerFailure());
    }
}
//login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
