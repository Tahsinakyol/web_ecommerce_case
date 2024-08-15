import { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_outher">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="footer_inner_main">
              <i class="fa-solid fa-lock"></i>
              <p>Payment Methot</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="footer_inner_main">
              <i class="fa-solid fa-map"></i>
              <p>Made in Turkey</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="footer_inner_main">
              <i class="fa-solid fa-shield-halved"></i>
              <p>Security</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="footer_inner_main">
              <i class="fa-solid fa-lock"></i>
              <p>Payment Methot</p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_outher">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div className="footer_link_outher">
                <div className="footer_logo">Hızır Global Aş</div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  officia quia aut, dolor quaerat repellat culpa molestiae
                  molestias nulla. Quis voluptatibus saepe quibusdam molestias
                  porro enim distinctio laborum sunt quod.
                </span>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">
              <div className="footer_link_outher">
                <p>Site Map</p>
                <Link className="link_footer">HomePage</Link>
                <Link className="link_footer">About</Link>
                <Link className="link_footer">Contact</Link>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div className="last_footer_outher">
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="search_and_button">
                  <input type="text" placeholder="Write a message" />
                  <button>Search</button>
                </div>
                <div className="footer_social">
                  <a href="#" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="createBy">Create by Tahsin Akyol</div>
    </footer>
  );
};

export default Footer;
