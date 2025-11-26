import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import all_product from "../assets/all_product";

const CartItems = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const itemsInCart = Object.entries(cartItems).filter(([id, qty]) => qty > 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {itemsInCart.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        itemsInCart.map(([id, qty]) => {
          const product = all_product.find((p) => p.id == id);
          if (!product) return null;

          return (
            <div className="cart-page-row" key={id}>
              <img src={product.image} alt={product.name} />

              <div>
                <h3>{product.name}</h3>
                <p>Price: {product.new_price}</p>
                <p>Quantity: {qty}</p>

                <button onClick={() => removeFromCart(id)}>Remove</button>
                <button onClick={() => addToCart(id)}>Add</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CartItems;
