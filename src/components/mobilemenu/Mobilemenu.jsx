import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

export default function Mobilemenu() {
    const {openmenu}=useContext(MobileHandlerContext);
  return (
    <div className={'mobilemenu ${openmenu ? "active" : ""}'}>
          <ul>
          <NavLink className={"active"} to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
    </div>
  )
}

