
import React, { useState } from "react";

import { NavLink} from "react-router-dom";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import "../styles/all-foods.css";
const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
/*   const [productData, setProductData] = sueState(products); */
const searchedProduct = products.filter((item) => {
  if (searchTerm.value === "") {
    return item;
  }
  if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
    return item;
  } else {
    return console.log("not found");
  }
});
//==============

//======
  const productPerPage = 6;
  const visitedPage = pageNumber * productPerPage;
  const displayPage =
    searchedProduct.slice (visitedPage, visitedPage + productPerPage);

  const pageCount = Math.ceil(
    searchedProduct.length / productPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };




  return (
    <Helmet title="Sản phẩm">
      <div className="breadcumb">
        <h1>Sản phẩm</h1>
        <p>
          <NavLink to="/">Trang chủ &gt;&gt;</NavLink>Sản phẩm
        </p>
      </div>
      <section className="section product">
        <div className="container col-container">
          <div className="filters-left">
            <div className="filters-left-top">
              <h4 style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-funnel-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                </svg>
                &nbsp; Bộ lọc
              </h4>
              <button id="reset-checkboxes-button">Bỏ lọc</button>
            </div>
            <div className="filters">
              <h4>Danh mục</h4>


              <label className="containerr">
                Mới về
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="new"
                />
                <span className="checkmark" />
              </label>
              <label className="containerr">
                Nổi bật
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="noibat"
                />
                <span className="checkmark" />
              </label>
              <label className="containerr">
                Đang giảm giá
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="sale"
                />
                <span className="checkmark" />
              </label>
              <label className="containerr">
                Mới về
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="new"
                />
                <span className="checkmark" />
              </label>
              <label className="containerr">
                Nổi bật
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="noibat"
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="filters">
              <h4>Trạng thái</h4>
              <label className="containerr">
                Mới về
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="new"
                />
                <span className="checkmark" />
              </label>
              <label className="containerr">
                Nổi bật
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="noibat"
                />
                <span className="checkmark" />
              </label>
              <label className="containerr">
                Đang giảm giá
                <input
                  type="checkbox"
                  name="categoryFilter"
                  className="filter-checkbox"
                  defaultValue="sale"
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="container-right">
            <div className="search-top">
              <div className="search__widget ">
                <input
                  type="text"
                  placeholder="Tìm kiếm...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>

              <div className="sorting__widget text-end">
                <select className="select">
                  <option>Mặc định</option>
                  <option value="ascending">Từ A-Z</option>
                  <option value="descending">Từ Z-A</option>
                  <option value="high-price">Giá cao</option>
                  <option value="low-price">Giá thấp</option>
                </select>
              </div>
            </div>

            <div className="grid-list list-product ">
              {displayPage.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
            </div>
            <div className=" ">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
              />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Pizzas;
