import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Component } from "react"
import Home from "./home"
import NotFound from "./not-found"

export default class RouteList extends Component {

    render(){
      return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
      )
    }

}