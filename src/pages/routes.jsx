import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Component } from "react"
import Home from "./home"
import Product from "./product"

import NotFound from "./not-found"
import AboutUs from "./about"
import Cart from "./cart"

export default class RouteList extends Component {

    render(){
      return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      )
    }

}