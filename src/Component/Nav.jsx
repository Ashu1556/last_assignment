import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar1">
        <h2>Ecommerce Website</h2>
      </div>
      <div className="navbar2">
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/classcomponent">ClassComponent</Link>
        <Link to="/useref">Use_RefComponent</Link>
      </div>
    </div>
  );
};

export default Nav;
