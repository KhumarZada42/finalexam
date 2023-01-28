import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo">Floral Studio</div>
        <div className="link">
          <Link className="li" to={"/"}>
            Home
          </Link>
          <Link className="li" to={"/add"}>
            Add
          </Link>
          <Link className="li" to={"/detail"}>
            Detail
          </Link>
          <Link className="li" to={"/wishlist"}>
            Wish List
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
