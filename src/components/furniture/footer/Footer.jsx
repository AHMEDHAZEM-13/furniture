import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, maiores voluptatem tempore quasi deserunt rerum, magnam ducimus laboriosam quos a blanditiis, deleniti fugiat amet repellat.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, maiores voluptatem tempore quasi deserunt rerum, magnam ducimus laboriosam quos a blanditiis, deleniti fugiat amet repellat.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>LAMASTORE</span>
          <span className='copyright'>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/src/assets/img/logo.png" alt="" />
        </div>
      </div>
    </div>
  )
}
