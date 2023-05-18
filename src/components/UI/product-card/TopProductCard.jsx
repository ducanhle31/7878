import React from "react";
import ReactStars from "react-rating-stars-component";



import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
import { Link } from "react-router-dom";

const TopProductCard = (props) => {
  const { id, title, image01, price, del, star, extraIngredients } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        star,
        title,
        image01,
        del,
        price,
        extraIngredients,
      })
    );
  };

  function convertMoney(num) {
    return num.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  }

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
  return (
    <div>
      <div className="product-card top-product-card">
        <figure className="card-banner">
          <img
            alt="Pizza"
            src={image01}
            width={150}
            height={150}
            loading="lazy"
          />
          <div className="btn-wrapper">
            <Link to={`/pizzas/${id}`}>
              <button className="product-btn" aria-label="Quick View">
                <i class="ri-eye-line"></i>
                <div className="tooltipp">Xem thêm</div>
              </button>
            </Link>
          </div>
        </figure>
        <div className="card-content">
          <div className="rating-wrapper">
            <ReactStars
              edit={false}
              value={star}
              size={30}
              isHalf={true}
              emptyIcon={<i class="ri-star-line"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i class="ri-star-line"></i>}
              activeColor="var(--yellow-orange)"
            />
          </div>
          <h3 className="h4 card-title product__name">
            <Link to={`/pizzas/${id}`}>{title}</Link>
          </h3>
          <div className="price-wrapper price-wrapper-top">
            <del className="del">{convertMoney(del)}</del>
            <data className="price product__price">{convertMoney(price)}</data>
          </div>
          <span onClick={notify}>
            {" "}
            <button
              onClick={addToCart}
              className="btn btn-primary btn__add__to__cart"
            >
              Thêm vào giỏ
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopProductCard;
