import React from "react";

import ReactStars from "react-rating-stars-component";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price,del,star, extraIngredients } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,star,
        title,
        image01,
        del,
        price,
        extraIngredients
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
      <div className="product__element product-card filterDiv ">
        <figure className="card-banner">
          <img
            className="images"
            width={189}
            height={189}
            loading="lazy"
            alt="Pizza"
            src={image01}
          />

          <div className="btn-wrapper">
            {" "}
            <Link to={`/pizzas/${id}`}>
              <button className="product-btn" aria-label="Quick View">
                <i class="ri-eye-line"></i>
                <div className="tooltipp">Xem thêm</div>
              </button>
            </Link>
          </div>
        </figure>
        <div className="rating-wrapper">
          {" "}
          <ReactStars
            edit={false}
            value={star}
            size={30}
            isHalf={true}
            emptyIcon={<i class="ri-star-line"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i class="ri-star-fill"></i>}
            activeColor="var(--yellow-orange)"
          />
        </div>
        <h3 className="h4 card-title product__name">
          <Link to={`/pizzas/${id}`}>{title}</Link>
        </h3>
        <div className="price-wrapper">
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
  );
};

export default ProductCard;
