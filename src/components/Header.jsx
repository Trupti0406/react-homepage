import React from "react";
import "./css/Header.css";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />; */
}

const Header = () => {
  return (
    <>
      <header id="header">
        {/* First part of header */}
        <nav className="navbar navbar-inverse p-2">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="../index.html">
                <img src={logo} alt="" srcset="" className="logo" />
              </a>
            </div>
            <form className="navbar-form navbar-left d-flex">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search clothes"
                  name="search"
                />
              </div>
              <button type="button" className="btn btn-warning">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
            <ul className="nav gap-4 navbar-right d-flex align-items-center">
              <li>
                <button className="login d-flex align-items-center rounded-3">
                  <a href="../login/login.html" className="btn fw-bold">
                    Login
                  </a>
                </button>
              </li>
              <li>
                <a href="../cart/cart.html" className="text-decoration-none">
                  <div className="cart">
                    <FontAwesomeIcon icon={faCartShopping} className="cart" />

                    <span
                      className="cart-number fw-bold text-black rounded-circle p-1"
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
        <ul className="navigation-bar nav justify-content-center fw-semibold">
          <li className="nav-item">
            <a
              className="nav-link text-black"
              aria-current="page"
              href="/index.html"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="/pages/allProducts.html">
              All products
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link text-black dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Women
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/pages/women/womenAll.html">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/pages/women/womenDress.html">
                  Dresses
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/pages/women/womenPants.html">
                  Pants
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/pages/women/womenSkirts.html">
                  Skirts
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link text-black dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Men
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/pages/men/menAll.html">
                  All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/pages/men/menShirts.html">
                  Shirts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/pages/men/menPants.html">
                  Pants
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/pages/men/menHoodie.html">
                  Hoodies
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="/pages/kids.html">
              Kids
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="/contact.html">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
