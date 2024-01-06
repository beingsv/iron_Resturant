import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import RestaurantMenu from './Pages/RestaurantMenu'

const RoutesDefined = () => {
  return (
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element= { <Home/> } />
                <Route path='/about' element= { <About/> } />
                <Route path='/restaurant/:restaurantId' element= { <RestaurantMenu/> } />
                <Route path='*' element= { <Error/> } />
            </Routes>
        </BrowserRouter>
    </>
  )
}


export default RoutesDefined