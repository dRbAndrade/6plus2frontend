import "../styles/home.scss"
import Header from "../components/header"
import Carrossel from "../components/carrossel"
import BannerHome from "../components/bannerHome"
import BannerPromo from "../components/bannerPromo"
import ButtonBlack from "../components/buttonBlack"
import Categories from "../components/categories"
import {Helmet} from "react-helmet"
import Row from "react-bootstrap/Row"
import Footer from "../components/footer"

const Home = () => { 
  const shouldCarrossel = window.innerWidth>600?true:false
  return(
    <>
      <Helmet>
        <title>6pluS2store</title>
      </Helmet>
      <div>
        <Header/>
        <main> 
          <BannerHome></BannerHome>
          
          <Categories></Categories>
          <BannerPromo bannerImageUrl="https://i.imgur.com/DK42azw.png" bannerTitle="Summer Vibes" bannerSubtitle="Confira nossa seleção para esportes de verão">
            <ButtonBlack>Ver produtos</ButtonBlack>
          </BannerPromo>
          <h2 className="categoryTitle">Os mais vendidos</h2>
          {shouldCarrossel&&
            <Row className="p-0 g-0 d-flex justify-content-center">
              <Carrossel></Carrossel>
            </Row>
          }
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;