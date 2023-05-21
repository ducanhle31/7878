import Login from "./Login";
import Signup from "./Logout";
import "./SignUpUi.css";

import React, { useState } from "react";

export default function Main() {
  const [display, setDisplay] = useState(false);

  return (
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
  );
}
