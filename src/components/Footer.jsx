import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-center text-white">
      <div className="container p-4">
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>
                <a
                  className="text-decoration-none text-white h4"
                  href="/pages/women/womenAll.html"
                >
                  Women
                </a>
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/pages/women/womenDress.html" className="text-white">
                    Dresses
                  </a>
                </li>
                <li>
                  <a href="/pages/women/womenPants.html" className="text-white">
                    Pants
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/women/womenSkirts.html"
                    className="text-white"
                  >
                    Skirts
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>
                <a
                  className="text-decoration-none text-white h4"
                  href="/pages/men/menAll.html"
                >
                  Men
                </a>
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/pages/men/menShirts.html" className="text-white">
                    Shirts
                  </a>
                </li>
                <li>
                  <a href="/pages/men/menPants.html" className="text-white">
                    Pants
                  </a>
                </li>
                <li>
                  <a href="/pages/men/menHoodie.html" className="text-white">
                    Hoodies
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5>
                <a
                  className="text-decoration-none text-white h4"
                  href="/pages/kids.html"
                >
                  kids
                </a>
              </h5>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <p className="h4">Links</p>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/index.html" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/login/login.html" className="text-white">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/contact.html" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Copyright text section  */}
      <div className="text-center p-3">
        <hr />
        Copyright ©E-Store 2022-2023 | Created by Trupti Yadav
      </div>
    </footer>
  );
};

export default Footer;
