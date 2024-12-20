import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { MAIN_URL } from '../../utils/constant';

export default function Card({ product }) {

    return (
        <div className='card'>
            {product?.feature && (
                <div className="card-badge">
                    <span>NEW</span>
                </div>
            )}

            <div className="image">
                <img src={MAIN_URL + product.image[0].formats.thumbnail.url} alt="product" />
            </div>
            <div className="card-title">
                <Link to={`shop/${product.slug}`}>{product.name}</Link>

            </div>
            <div className="card-price">
                <div className="price">
                    <span>$ {product.price}</span>
                </div>

                <div className="rate">
                    <FaStar />
                    <span>{product.rate}</span>
                </div>
            </div>
            <div className="card-btn">
                <button>Add To Cart</button>
            </div>
        </div>
    )
}
