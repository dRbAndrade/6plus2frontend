import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Component } from "react"
import Home from "./home"
import NotFound from "./not-found"
import AboutUs from "./about"

export default class RouteList extends Component {

    render(){
      return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
      )
    }

}