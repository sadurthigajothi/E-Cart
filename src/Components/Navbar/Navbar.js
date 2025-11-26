import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo-nav.jpg";
import cart from "../assets/cart-nav.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import all_products from "../assets/all_product";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { cartItems, addToCart, removeFromCart, getTotalcartitems } = useContext(ShopContext);
  const [openCart, setOpenCart] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>E-Cart</p>
        </div>

        <ul className="nav-menu">
          <li onClick={() => setmenu("shop")}>
            <Link to="/">Shop</Link>
            {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setmenu("mens")}>
            <Link to="/mens">Men</Link>
            {menu === "mens" && <hr />}
          </li>
          <li onClick={() => setmenu("womens")}>
            <Link to="/womens">Women</Link>
            {menu === "womens" && <hr />}
          </li>
          <li onClick={() => setmenu("kids")}>
            <Link to="/kids">Kids</Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>

        <div className="nav-cart">
          <button className="join-btn">Join</button>
          <img src={cart} alt="" className="cart-icons" onClick={() => setOpenCart(true)}/>
          <div className="nav-cart-count">{getTotalcartitems()}</div>
        </div>
      </div>

      <div className={`side-cart ${openCart ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button onClick={() => setOpenCart(false)}>✖</button>
        </div>

        <div className="cart-body">
          {Object.keys(cartItems).length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            Object.entries(cartItems).map(([id, qty]) => {
              const item = all_products.find((p) => p.id == id);
              if (!item) return null;

              return (
                <div className="cart-row" key={id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>{item.new_price} × {qty}</p>

                    <div className="side-qty">
                      <button onClick={() => removeFromCart(id)}>−</button>
                      <span>{qty}</span>
                      <button onClick={() => addToCart(id)}>+</button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <button className="checkout" onClick={() => {setOpenCart(false); navigate("/cart");}}>
          CHECKOUT
        </button>
      </div>

      {openCart && (
        <div className="overlay" onClick={() => setOpenCart(false)}></div>
      )}
    </>
  );
};

export default Navbar;
