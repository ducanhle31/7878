import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container } from "reactstrap";

import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/LOginOut.css"
 import * as Components from "../../pages/Components";

const nav__links = [
  {
    display: "Trang chủ",
    path: "/home",
  },
  {
    display: "Sản phẩm",
    path: "/pizzas",
  },
  {
    display: "Giới thiệu",
    path: "/about",
  },

  {
    display: "Tin tức",
    path: "/blog",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
  {
    display: "Giỏ hàng",
    path: "/cart",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
const dispatch = useDispatch();

   const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

    const [signIn, toggle] = React.useState(true);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };





  console.log(menuRef?.current?.classList.value);

 ///================

    const [logindata, setLoginData] = useState([]);

    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
      const getuser = localStorage.getItem("user_login");
      if (getuser && getuser.length) {
        const user = JSON.parse(getuser);

        setLoginData(user);

        const userbirth = logindata.map((el, k) => {
          return el.date === todayDate;
        });

        if (userbirth) {
          setTimeout(() => {
            console.log("ok");
            handleShow();
          }, 3000);
        }
      }
    };

    const userlogout = () => {
      localStorage.removeItem("user_login");
      history("/");
    };

    useEffect(() => {
      Birthday();
    }, []);

function refreshPage() {
  window.location.reload(false);
  userlogout(true);
}
  return (
    <div>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo" onClick={() => navigate("/home")}>
              <h1 className="h1">
                <Link to="/" className="logo">
                  Orga<span className="span">nic</span>
                </Link>
              </h1>
            </div>
            {/* ======= menu ======= */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div
                className="menu d-flex align-items-center gap-5"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="header-logobutton">
                  <h1 className="h1">
                    <Link to="/" className="logo">
                      Orga<span className="span">nic</span>
                    </Link>
                  </h1>
                  <div className="header__closeButton">
                    <span onClick={toggleMenu}>
                      <i className="ri-close-fill"></i>
                    </span>
                  </div>
                </div>

                {nav__links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                    onClick={toggleMenu}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/*  */}

            {/* ======== nav right icons ========= */}
            <div className="nav__right d-flex align-items-center gap-4">
              <span
                className="cart__icon header-action-btn"
                onClick={toggleCart}
              >
                <i className="ri-shopping-basket-line"></i>
                <span className="cart__badge">{totalQuantity}</span>
              </span>

              <>
                {logindata.length === 0 ? (
                  <NavLink to="/inout" className="user  header-action-btn">
                    <i class="ri-user-line"></i>
                  </NavLink>
                ) : (
                  <>
                    <div className="imglogin">
                      <label htmlFor="show1" className="show-btn1 ">
                        <img src="/images/R.jpg" alt="" />
                      </label>
                    </div>

                    <div className="center1">
                      <input type="checkbox" id="show1" />
                      <div className="container1">
                        <label
                          htmlFor="show1"
                          className="close-btn1"
                          title="close"
                        >
                          <i class="ri-close-fill"></i>
                        </label>
                        <div className="imgperson">
                          <img src="/images/R.jpg" alt="" />
                        </div>
                        <h1 className="adress">{logindata[0].name}</h1>
                        <h5 className="adress"> {logindata[0].email}</h5>
                        <Button className="btnlogout" onClick={refreshPage}>
                          Đăng xuất
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </>

              <div className="nav-open-btn">
                <span className="mobile__menu  " onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
