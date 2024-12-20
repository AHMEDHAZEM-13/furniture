import React, { useEffect, useState } from 'react'
import Furniture from '../../components/furniture/Furniture'
import Headline from '../../components/headline/Headline'
import Filtercategory from '../../components/filtercategory/Filtercategory'
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getAllCategories } from '../../reduxToolkit/slices/GetAllproducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../../components/card/Card';


export default function Shop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState("BedRoom");

  const { allCategories, filterCategoryItems } = useSelector((state) => state.products);
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  useEffect(() => {
    dispatch(filterCategory(activeTitle));
  }, [dispatch, activeTitle]);


  return (
    <main className='shop'>
      <Furniture />
      <Headline title={"Shop BY Category"} />
      <div className="filtercategory">
        <Swiper
          onClick={(e) => {
            setActiveIndex(e.clickedIndex)
            setActiveTitle(allCategories[e.clickedIndex].title);

          }}

          slidesPerView={2.3}
          spaceBetween={40}
          breakpoints={{
            1024: {
              slidesPerView: 4,

            },
          }}>
          {allCategories?.map((data, _id) => (
            <SwiperSlide key={_id}>
              <Filtercategory categoryData={data} activeIndex={activeIndex} _id={_id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="shop-category">
      <div className="shop--items">
        {filterCategoryItems[0]?.products?.map((product, _id) => <Card product={product} key={_id} />)}</div>

      </div>
    </main>
  )
}
