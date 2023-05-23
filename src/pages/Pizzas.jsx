import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import Helmet from "../components/Helmet/Helmet";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css";
import "../styles/all-foods.css";
const Pizzas = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("không có sản phẩm nào");
    }
  });

  ///

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "SEARCH") {
      setAllProducts(searchedProduct);
    } 

    if (category === "RAUCU") {
      const filteredProducts = products.filter(
        (item) => item.category === "Raucu"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "HOAQUA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Hoaqua"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "HAT") {
      const filteredProducts = products.filter(
        (item) => item.category === "Hat"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "THIT") {
      const filteredProducts = products.filter(
        (item) => item.category === "Thit"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "NEW") {
      const filteredProducts = products.filter((item) => item.brand === "new");

      setAllProducts(filteredProducts);
    }
    if (category === "OLD") {
      const filteredProducts = products.filter((item) => item.brand === "old");

      setAllProducts(filteredProducts);
    }
    if (category === "ATOB") {
      const filteredProducts = products.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );

      setAllProducts(filteredProducts);
    }
    if (category === "BTOA") {
      const filteredProducts = products
        .sort((a, b) => (a.price > b.price ? 1 : -1))
        .reverse();

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const productPerPage = 6;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = allProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(allProducts.length / productPerPage);

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
        <div className="container ">
          <div className="col-container">
            <div className="filters-left">
              <div className="filters-left-top">
                <div>
                  <i class="ri-filter-2-fill"></i>
                </div>

                <h4 style={{ fontSize: "20px" }}>Bộ lọc</h4>
              </div>
              <div className="filters">
                <div className="search-top">
                  <div className="search__widget ">
                    <input
                      type="text"
                      placeholder="Tìm kiếm...."
                      value={searchTerm}
                      onClick={() => setCategory("ALL")}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span onClick={() => setCategory("SEARCH")}>
                      <i class="ri-search-line"></i>
                    </span>
                  </div>
                </div>
                <h4 style={{ fontSize: "20px" }}>Danh mục</h4>
                <button
                  className={` filter-checkbox ${
                    category === "ALL" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Tất cả
                </button>
                <button
                  className={`filter-checkbox ${
                    category === "RAUCU" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("RAUCU")}
                >
                  Rau củ
                </button>

                <button
                  className={`filter-checkbox ${
                    category === "HOAQUA" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("HOAQUA")}
                >
                  Hoa quả
                </button>

                <button
                  className={`filter-checkbox ${
                    category === "HAT" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("HAT")}
                >
                  Các loại hạt
                </button>
                <button
                  className={`filter-checkbox ${
                    category === "THIT" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("THIT")}
                >
                  Thực phẩm tươi sống
                </button>
              </div>
              <div className="filters">
                <h4 style={{ fontSize: "20px" }}>Trạng thái</h4>
                <button
                  className={`filter-checkbox ${
                    category === "NEW" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("NEW")}
                >
                  Mới về
                </button>
                <button
                  className={`filter-checkbox ${
                    category === "OLD" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("OLD")}
                >
                  Nổi bật
                </button>
                <button
                  className={`filter-checkbox ${
                    category === "ATOB" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("ATOB")}
                >
                  Giá thấp đến cao
                </button>
                <button
                  className={`filter-checkbox ${
                    category === "BTOA" ? "foodBtnActivee" : ""
                  } `}
                  onClick={() => setCategory("BTOA")}
                >
                  Giá cao đến thấp
                </button>
              </div>
            </div>
            <div className="container-right">
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
        </div>
      </section>
    </Helmet>
  );
};

export default Pizzas;
