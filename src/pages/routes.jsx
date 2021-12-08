import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Component } from "react"
import Home from "./home"
import Product from "./product"
import Products from "./products"
import NotFound from "./not-found"
import AboutUs from "./about"
import Cart from "./cart"
import CartContextProvider from "../contexts/CartContext"
import ProductContextProvider from "../contexts/ProductContext"


export default class RouteList extends Component {

    render(){
      return(
        <BrowserRouter>
        <CartContextProvider>
          <ProductContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products/:id" element={<Product/>}/>
            <Route path="/products/" element={<Products/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          </ProductContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      )
    }

}