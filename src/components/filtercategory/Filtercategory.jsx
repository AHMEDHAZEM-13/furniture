import React, { useState } from 'react'
import { MAIN_URL } from '../../utils/constant';
import { useSelector } from 'react-redux';

export default function Filtercategory({categoryData,activeIndex , _id}) {

  
  return (
    
    <div className={`filtercategory-container active ${activeIndex===_id ? "active" : ""}`}  >
        <div className="fliter-images">
            <img src= {MAIN_URL +  categoryData?.image?.url}alt="" />
        </div>
        <span>{categoryData?.title}</span>
    </div>
  )
}

