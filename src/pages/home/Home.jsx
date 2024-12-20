import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import Featuredmoder from '../../components/featuredmodern/Featuredmoder'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../reduxToolkit/slices/GetAllproducts';
import Category from '../../components/category/Category';
import ContactUs from '../../components/contactus/ContactUs';

export default function Home() {
  const {productData, isLoading, error}= useSelector((state)=>state.products);
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getAllProducts());
  },[dispatch]);
  return (
    <div className='home'>
      <Banner/>
     {productData&& <Featuredmoder productData={productData}/>}
     <Category/>
     {productData&& <Featuredmoder productData={productData} />}
     <ContactUs/>
    </div>
  )
}
