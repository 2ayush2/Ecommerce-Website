import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          {" "}
          Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </div>
  );
};
