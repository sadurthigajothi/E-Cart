import React, { useContext } from "react";
import "../Components/Navbar/Navbar.css";
import { ShopContext } from "../Components/Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product) return <h2>Loading...</h2>; 

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />

      <div className="shopcategory-indexsort">
        <p>
          <span>Showing items 1 - 24 items</span>
        </p>
        <div className="shopcategory-sort">
          Sort by <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>

      <div className="shop-category-products">
        {all_product
          .filter((item) => item.category === props.category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
