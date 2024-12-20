import React from 'react'
import Headline from '../headline/Headline'
import Card from '../card/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Navigation, Scrollbar } from 'swiper/modules'

export default function Featuredmoder({productData}) {
  
  return (
    <section className='featuredmodern'>
      <Headline title={"Featured Modern"} />
      <Swiper slidesPerView={4} spaceBetween={40}
      modules={[Navigation ,Scrollbar]}
      navigation={{
        nextEl: ".right-arrow",
        prevEl: ".left-arrow",
      }}
      scrollbar={{ el: ".swiper--scrollbar" , draggable: true }}
       breakpoints={
        {
          640: {
            slidesPerView: 1,

          },
          768: {
            slidesPerView: 2,

          },
          1024: {
            slidesPerView: 3,

          },

          1400: {
            slidesPerView: 4,
          },
          1800: {
            slidesPerView: 5
          }
        }
      }>
  
        {productData?.map((product) =>(
           <SwiperSlide key={product.id}>
           <Card product={product} />
         </SwiperSlide> 
        ))}       
      </Swiper>
      <div className="swiper-option">
        <div className="swiper--scrollbar">          
        </div>
        <div className="swiper-arrow">
          <div className=" left-arrow icon">
            <FaArrowLeft />
          </div>
          <div className=" right-arrow icon">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </section >
  )
}
