import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import "./LoginScreen.scss";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png"
          alt="yt_logo"
        />
        <button onClick={handleLogin}>Login with Google</button>
        <p>A Youtube Clone project using Youtube Api by gaurav tambe</p>
      </div>
    </div>
  );
};

export default LoginScreen;
