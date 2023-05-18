import {  useSelector } from "react-redux";

import {  useState } from "react";


import "../styles/checkout.css";


import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  function convertMoney(num) {
    return num.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  }
  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30000;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  return (
    <Helmet title="Thanh toán">
      <div className="breadcumb">
        <h1>Thanh toán</h1>
        <p>
          <NavLink to="/">Trang chủ &gt;&gt;</NavLink>Thanh toán
        </p>
      </div>

      <section>
        <Container>
          <Row className="checkoutp">
            <Col lg="8" md="6">
              <h6 className="mb-4">Địa chỉ giao hàng</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Số điện thoại"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
            
              
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Mã giảm giá"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Thanh toán
                </button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Tạm tính : <span>{convertMoney(cartTotalAmount)}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Vận chuyển :<span>{convertMoney(shippingCost)}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Tổng tiền : <span>{convertMoney(totalAmount)}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
