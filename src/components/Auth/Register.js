import React from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const nav = useNavigate();
  const handleSignin = () => {
    nav("/signin");
  };
  const handleLogin = () => {
    nav("/login");
  };
  return (
    <div className="registerbox">
      <div className="register">
        <h1>Welcome To Learning Platform</h1>
        <div className="btnregister">
          <button onClick={handleSignin} className="btnsignin">
            Signin
          </button>
          <button onClick={handleLogin} className="btnlogin">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
