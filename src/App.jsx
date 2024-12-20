import React, { Fragment, useEffect, useState } from 'react'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Contact from './pages/contact/Contact'
import Whishlist from './pages/whishlist/Whishlist'
import Cart from './pages/cart/Cart'
import Loading from './components/loading/Loading'
import ProductDetails from './components/productdetails/ProductDetails'
import Error from './components/error/Error';
import { Provider } from 'react-redux'
import { Store } from './reduxToolkit/store/store'


export default function App() {
  const [isloading, setIsloading] = useState(false)
  const Routing = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "shop", element: <Shop /> },
        { path: "contact", element: <Contact /> },
        { path: "whishlist", element: <Whishlist /> },
        { path: "cart", element: <Cart /> },
        { path: "/shop/:slug", element: <ProductDetails /> },
        { path: "*", element: <Error /> },
      ]
    },
  ])
  useEffect(() => {
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
    }, 3000);
  }, [])
  return (
    <Fragment>
       <Provider store={Store}>
        
        {""}
          <RouterProvider router={Routing} />
      </Provider>


      {/* <Provider store={Store}>
        {isloading ? <Loading /> :
          <RouterProvider router={Routing} />}
      </Provider> */}


    </Fragment>
  )
}
