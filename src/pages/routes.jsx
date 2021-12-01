import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Component } from "react"
import Home from "./home"
import Product from "./product"

import NotFound from "./not-found"

export default class RouteList extends Component {

    render(){
      return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      )
    }

}