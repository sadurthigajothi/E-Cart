import React from 'react'
import '../Navbar/Navbar.css';
import productlist from '../assets/productlist'

const Sidebar = ({ setCategory }) => {  
  return (
    <div>

      <select className="category-select" onChange={(e)=> setCategory(e.target.value)}>
        <option value="" disabled selected>Womens</option>
        <option value="women-kurti">Kurti</option>
        <option value="women-shirt">T-shirts</option>
        <option value="women-top">Tops</option>
      </select>

      <select className="category-select" onChange={(e)=> setCategory(e.target.value)}>
        <option value="" disabled selected>Mens</option>
        <option value="men-shirt">Shirts</option>
        <option value="men-tshirt">T-Shirts</option>
        <option value="men-ethnic">Ethnic Wear</option>
      </select>

      <select className="category-select" onChange={(e)=> setCategory(e.target.value)}>
        <option value="" disabled selected>Kids</option>
        <option value="kids-boy">Boy</option>
        <option value="kids-girl">Girl</option>
      </select>

    </div>
  )
}

export default Sidebar;
