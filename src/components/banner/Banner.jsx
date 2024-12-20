import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <section className='banner'>
            <div className="hero-content">
                <div className="content">
                    <p>Welcome to!</p>
                    <h1> Modern Furniture</h1>
                </div>
                <div className="btn">
                    <Link to="">BUY Now</Link>
                </div>
            </div>
        </section>
    )
}

