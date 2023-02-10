import React from "react";
import "./css/Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <>
      <Product />
      <h2 class="fw-bolder py-3 px-5">Featured Products:</h2>
      <Carousel responsive={responsive}>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className=".slide-container">
          <div class="featured card swiper-slide">
            <img
              src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
              class="card-img-top"
              alt="..."
            />

            <div class="card-body text-center">
              <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
              <p class="price fw-semibold h5">₹ 659</p>
              <p class="card-text">
                Allen Solly Men's Plain Regular Fit Polo T-shirt, available in
                all sizes
              </p>
              <button class="add-cart d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className=".add-to-cart"
                />
                <a href="#" class="btn fw-bold">
                  Add To Cart
                </a>
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

const Product = () => {
  return (
    <div className=".slide-container">
      <div class="featured card swiper-slide">
        <img
          src="https://m.media-amazon.com/images/I/71WmwSot-vL._AC_UL320_.jpg"
          class="card-img-top"
          alt="..."
        />

        <div class="card-body text-center">
          <h5 class="card-title fw-bold p-1">Black T-shirt</h5>
          <p class="price fw-semibold h5">₹ 659</p>
          <p class="card-text">
            Allen Solly Men's Plain Regular Fit Polo T-shirt, available in all
            sizes
          </p>
          <button class="add-cart d-flex align-items-center">
            <FontAwesomeIcon icon={faCartShopping} className=".add-to-cart" />
            <a href="#" class="btn fw-bold">
              Add To Cart
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
