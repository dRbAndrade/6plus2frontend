import "../styles/home.scss"
import BannerHome from "../components/bannerHome";
import Header from "../components/header";

import {Helmet} from "react-helmet";

const Banner = () => { 
  return(
    <>
      <Header></Header>
      <BannerHome></BannerHome>
    </>
  )
}

export default Banner;