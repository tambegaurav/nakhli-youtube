import firebase from "firebase/app";
import auth from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    console.log(result);

    const accessToken = result.credential.accessToken;

    const profile = {
      name: result.additionalUserInfo.profile.name,
      photoURL: result.additionalUserInfo.profile.picture,
    };

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};
