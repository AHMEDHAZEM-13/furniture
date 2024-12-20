import React, { useEffect } from 'react'
import Furniture from '../furniture/Furniture'
import Headline from './../headline/Headline';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../reduxToolkit/slices/GetAllproducts';
import { MAIN_URL } from '../../utils/constant';

export default function ProductDetails() {
  const { slug } = useParams();
  const { productDetails } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(slug));
  }, [slug]);
  console.log(productDetails);



  return (
    <main className='productdetails '>
      <Furniture />
      <Headline title={"Product Details"} />
      {productDetails.name && <div className="productDetails-container">
        <div className="productDetails-image">
          <img src={MAIN_URL + productDetails?.image[0]?.formats?.thumbnail?.url} alt="" />
        </div>
        <div className="productDetails--content">
          <h4>{productDetails?.name}</h4>
          <p>{productDetails.descraption}</p>
          <span>$ {productDetails?.price}</span>

          <div className="card--btn">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>}
    </main>


  );
}





