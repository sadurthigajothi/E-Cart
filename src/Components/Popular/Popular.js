import React, { useState } from "react";
import "../Navbar/Navbar.css";
import productlist from "../assets/productlist";
import Item from "../Item/Item";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import Slideshow from '../Slideshow/Slideshow'

const Popular = () => {

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productlist.filter((item) => {
    const categoryMatch = category ? item.category === category : true;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="product-list-page">

      <Hero setSearchTerm={setSearchTerm} />
      <Slideshow />

      <h1 className="page-heading">POPULAR COLLECTIONS</h1>
      <hr className="heading-line" />

      <div className="product-layout">
        <Sidebar setCategory={setCategory} />

        <div className="product-grid">
          {filteredProducts.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default Popular;
