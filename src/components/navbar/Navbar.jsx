import React, { useContext, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPersonExclamation } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'


export default function Navbar() {
  // const {isMobile}=useContext(MobileHandlerContext);
  const [open,setopen]= useState(false);
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="logo">
          <img src="/src/assets/images/img1.png" alt="logo" />
        </div>
        <ul>
          <NavLink className={"active"} to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>

        <div className="icons">
          <div className="icon">
            <BsPersonExclamation />
          </div>
          <div className="icon">
            <IoSearchOutline />
          </div>
          <div className="icon">
            <FaRegHeart onClick={() => setopen(!open)} />
            <span>0</span>
          </div>
          <div className="icon">
            
            <AiOutlineShoppingCart onClick={() => setopen(!open)} />
            <span>0</span>
          </div>
          {/* {isMobile && (
            <div className="nav-baricon menu-open">
              <div></div>
              <div></div>
            </div>
          )} */}
        </div>


      </div>
      {open &&<Cart/>}
    </nav>
  )
}
