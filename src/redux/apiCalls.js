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
    try {
        const res = await  publicRequest.post('/auth/register',user)
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
    const res = await publicRequest.post('/auth/login', user);
    console.log("res",res);
    dispatch(loginSuccess(res.data));
    
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
    
  }
};
