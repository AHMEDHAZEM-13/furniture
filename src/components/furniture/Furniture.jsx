import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Furniture() {
    const {pathname} = useLocation()
  return (
    <section className='furniture'>
        <div className="furniture-text">
            <Link to="/">Home -</Link>
            <span className='page'>{pathname.slice(1)}</span>
        </div>
    </section>
  )
}
