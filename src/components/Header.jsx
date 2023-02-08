import React from "react";
import "./css/Header.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />; */}

const Header = () => {
  return (
    <>
      <header id="header">
        {/* First part of header */}
        <nav class="navbar navbar-inverse p-2">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="../index.html">
                <img src={logo} alt="" srcset="" className="logo" />
              </a>
            </div>
            <form class="navbar-form navbar-left d-flex">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search clothes"
                  name="search"
                />
              </div>
              <button type="button" class="btn btn-warning">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
            <ul class="nav gap-4 navbar-right d-flex align-items-center">
              <li>
                <button class="login d-flex align-items-center rounded-3">
                  <a href="../login/login.html" class="btn fw-bold">
                    Login
                  </a>
                </button>
              </li>
              <li>
                <a href="../cart/cart.html" class="text-decoration-none">
                  <div class="cart">
                    <FontAwesomeIcon icon={faCartShopping} className='cart' />

                    <span
                      class="cart-number fw-bold text-black rounded-circle p-1"
                      id="total__counter"
                    >
                      0
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Second Part of header / Navigation Bar */}
        <ul class="navigation-bar nav justify-content-center fw-semibold">
          <li class="nav-item">
            <a
              class="nav-link text-black"
              aria-current="page"
              href="/index.html"
            >
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="/pages/allProducts.html">
              All products
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link text-black dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Women
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/pages/women/womenAll.html">
                  All
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/pages/women/womenDress.html">
                  Dresses
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/pages/women/womenPants.html">
                  Pants
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/pages/women/womenSkirts.html">
                  Skirts
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link text-black dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Men
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/pages/men/menAll.html">
                  All
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/pages/men/menShirts.html">
                  Shirts
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/pages/men/menPants.html">
                  Pants
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/pages/men/menHoodie.html">
                  Hoodies
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="/pages/kids.html">
              Kids
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-black" href="/contact.html">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
