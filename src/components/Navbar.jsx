import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  // console.log(pathname);

  const { cartItems, favoriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Phone World
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={
                "nav-link " + (pathname === "/" && "active text-danger fw-bold")
              }
              to="/"
            >
              Products
            </Link>
            <Link
              className={
                "nav-link " +
                (pathname === "/cart" && "active text-danger fw-bold")
              }
              to="/cart"
            >
              Cart{" "}
              {totalItemCount > 0 && (
                <span className="badge bg-secondary">{totalItemCount}</span>
              )}
            </Link>
            <Link
              className={
                "nav-link " +
                (pathname === "/favorite" && "active text-danger fw-bold")
              }
              to="/favorite"
            >
              Favorite{" "}
              {favoriteIds.length > 0 && (
                <span className="badge bg-secondary">{favoriteIds.length}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
