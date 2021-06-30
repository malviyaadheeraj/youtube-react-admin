import React from "react";
import "./Login.scss";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
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
        <h3 className="loginLogo">Lamaadmin</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on Lamaadmin.
        </span>
        <button className="loginGoogleButton" onClick={handleGoogleLogin}>
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
