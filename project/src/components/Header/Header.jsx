import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_main">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="logo_outher">Hızır Global Aş</div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="center_menu_outher">
              <Link to="/" className="link_menu_text">
                Homepage
              </Link>
              <Link className="link_menu_text">About</Link>
              <Link className="link_menu_text">Contact</Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="menu_right_outher">
              <Link className="icon_outher">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link className="icon_outher">
                <i class="fa-regular fa-user"></i>
              </Link>
              <Link to="/cart" className="icon_outher">
                <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
