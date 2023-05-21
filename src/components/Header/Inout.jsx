import Login from "./Login";
import Signup from "./Logout";
import "./SignUpUi.css";
import Helmet from "../../components/Helmet/Helmet";
import React, { useState } from "react";

export default function Main() {
  const [display, setDisplay] = useState(false);

  return (
    <Helmet title="Đăng nhập">
      <div className="containerrr">
        <div className={!display ? "signin_padding" : "main_button"}>
          <button className="sign" onClick={() => setDisplay(true)}>
            Đăng ký
          </button>
          <button className="sign" onClick={() => setDisplay(false)}>
            Đăng nhập
          </button>
        </div>
        {display ? <Signup /> : <Login />}
      </div>
    </Helmet>
  );
}
