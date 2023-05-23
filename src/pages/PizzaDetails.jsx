import React, { useState, useEffect} from "react";

import { View } from "./ViewDetails";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules

import { Autoplay, Pagination } from "swiper";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
  import {  toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";
import TopProductCard from "../components/UI/product-card/TopProductCard.jsx";
import { NavLink } from "react-router-dom";
// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  
  const { id } = useParams();
  const dispatch = useDispatch();
  function convertMoney(num) {
    return num.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  }
  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, del, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        del,
        image01,
      })
    );
  };



  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const notify = () =>
    toast.success("Sản phẩm đã được thêm vào giỏ", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // main array of objects state || books state || books array of objects
  const [books, setbooks] = useState(getDatafromLS());

  // input field states
  const [name, setName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");

  const [isbn, setIsbn] = useState("");

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
      toast.success("Đánh giá thành công", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    // creating an object
    let book = {
      name,
      enteredEmail,
      isbn,
    };
    setbooks([...books, book]);
    setName("");
    setEnteredEmail("");
    setIsbn("");
  };

  // delete book from LS
  const deleteBook = (isbn) => {
    const filteredBooks = books.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setbooks(filteredBooks);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <Helmet title={title}>
      <div className="breadcumb">
        <h1>{title}</h1>
        <p>
          <NavLink to="/">Trang chủ &gt;&gt;</NavLink>
          {title}
        </p>
      </div>

      <section className="Product-details">
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Giá tiền : <span>{convertMoney(price)}</span>{" "}
                  <del className="del">{convertMoney(del)}</del>
                </p>
                <p className="thuonghieu">
                  Thương hiệu: <span>Đang cập nhật</span> Tình trạng:
                  <span>Còn hàng</span>
                </p>

                <p>Nguồn gốc: Việt Nam</p>
                <p>Khối lượng: 1kg/ hộp</p>

                <p className="category ">
                  Phân loại : <span>{category}</span>
                </p>
                <h4 className="phone">
                  Gọi đặt mua: <span className="phonee">123456789</span> để
                  nhanh chóng đặt hàng
                </h4>
                <span onClick={notify}>
                  <button onClick={addItem} className="addTOCart__btn">
                    Thêm vào giỏ
                  </button>
                </span>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Miêu tả
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Đánh giá
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  {books.length > 0 && (
                    <>
                      <View books={books} deleteBook={deleteBook} />

                      <button
                        className="btn btn-danger btn-md"
                        onClick={() => setbooks([])}
                      >
                      Xóa toàn bộ đánh giá
                      </button>
                    </>
                  )}
                  {books.length < 1 && (
                    <div className="review">
                      <div className="reviewleft">
                        
                        <p className="user__name mb-0">Thu Trang</p>
                        <p className="user__email">jhon1@gmail.com</p>
                        <p className="feedback__text">
                          Chất lượng sản phẩm tuyệt vời.
                        </p>
                      </div>
                    </div>
                  )}

                  <form
                    autoComplete="off"
                    className="form"
                    onSubmit={handleAddBookSubmit}
                  >
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      ></input>
                    </div>

                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Email"
                        required
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        value={enteredEmail}
                      ></input>
                    </div>

                    <div className="form__group">
                      {" "}
                      <textarea
                        type="text"
                        placeholder="Đánh giá"
                        required
                        onChange={(e) => setIsbn(e.target.value)}
                        value={isbn}
                      ></textarea>
                    </div>

                    <button type="submit" className="addTOCart__btn">
                      Đánh giá
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">Sản phẩm liên quan</h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section top-product prdlq">
        <div className="container">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.5": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {relatedProduct.map((item) => (
              <SwiperSlide>
                <TopProductCard item={item} key={item.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
