import React from "react";
import "./Login.scss";
import { auth, googleProvider } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleProvider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl,
        })
      );
    });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamaadmin</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamaadmin.
          </span>
          <button className="loginGoogleButton" onClick={handleGoogleLogin}>
            Log in with Google
          </button>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
