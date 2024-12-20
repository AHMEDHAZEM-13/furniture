import React from 'react'
import { MdOutlineDeleteForever } from 'react-icons/md';
import Furniture from '../../components/furniture/Furniture';

export default function Cart() {
  const date = [
    {
      id: 1,
      title: "Product 1",
      desc: "Product 1",
      img: "/src/assets/img/img3.png",
      img2: "/src/assets/img/img31.png",
      oldPrice: "50",
      Price: "40",
    },
    {
      id: 2,
      title: "Product 2",
      desc: "Product 2",
      img: "/src/assets/img/img4.png",
      img2: "/src/assets/img/img41.png",
      oldPrice: "100",
      Price: "80",
    },
  ];
  return (
    <main>
    <div className='cart'>
    <h1>Shopping Cart</h1>
    {date.map((item) => (
      <div className="item" key={item.id}>
        <img src={item.img} alt="" />
        <div className="details">
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0, 100)}</p>
          <div className="price">
            1 × ${item.Price}
          </div>
        </div>
        <MdOutlineDeleteForever className='delete' />
      </div>
    ))}
    <div className="total">
      <span>SUBTOTAL</span>
      <span>$100</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">Reset Cart</span>


  </div>
  </main>
  )
}
