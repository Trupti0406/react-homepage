import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer id="footer" class="bg-dark text-center text-white">
  <div class="container p-4">
    <section>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5>
            <a
              class="text-decoration-none text-white h4"
              href="/pages/women/womenAll.html"
              >Women</a
            >
          </h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="/pages/women/womenDress.html" class="text-white"
                >Dresses</a
              >
            </li>
            <li>
              <a href="/pages/women/womenPants.html" class="text-white"
                >Pants</a
              >
            </li>
            <li>
              <a href="/pages/women/womenSkirts.html" class="text-white"
                >Skirts</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5>
            <a
              class="text-decoration-none text-white h4"
              href="/pages/men/menAll.html"
              >Men</a
            >
          </h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="/pages/men/menShirts.html" class="text-white">Shirts</a>
            </li>
            <li>
              <a href="/pages/men/menPants.html" class="text-white">Pants</a>
            </li>
            <li>
              <a href="/pages/men/menHoodie.html" class="text-white">Hoodies</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5>
            <a
              class="text-decoration-none text-white h4"
              href="/pages/kids.html"
              >kids</a
            >
          </h5>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <p class="h4">Links</p>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="/index.html" class="text-white">Home</a>
            </li>
            <li>
              <a href="/login/login.html" class="text-white">Login</a>
            </li>
            <li>
              <a href="/contact.html" class="text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
   {/* Copyright text section  */}
  <div class="text-center p-3">
    <hr />
    Copyright ©E-Store 2022-2023 | Created by Trupti Yadav
  </div>
</footer>

  );
};

export default Footer;
