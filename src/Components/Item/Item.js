import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Item = (props) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const qty = cartItems[props.id] || 0;
  const [hover, setHover] = useState(false);

  const handleIncrease = () => addToCart(props.id);
  const handleDecrease = () => removeFromCart(props.id);

  return (
    <div className='item'>
        <img
          src={props.image}
          alt={props.name}
        />

      <p>{props.name}</p>

      <div className="item-price">
        <div className="new_price">{props.new_price}</div>
        <div className="old_price">{props.old_price}</div>

        <div
          className="cart-btn-box"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover || qty > 0 ? (
            <div className="qty-box">
              <button onClick={handleDecrease}>−</button>
              <span>{qty}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
          ) : (
            <button className="cart-icon" onClick={handleIncrease}>
              <i class="fa-solid fa-basket-shopping"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
