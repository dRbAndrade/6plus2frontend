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
import Container from "react-bootstrap/Container"
import { useNavigate } from 'react-router';
import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext"

const Home = () => { 
  const navigate = useNavigate();
  const width = window.innerWidth;
  const {products} = useContext(ProductContext);
  let carrosselPages = 6;

  if(width>600)carrosselPages = 3;
  if(width>900)carrosselPages = 2;
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
            <ButtonBlack handleSubmit={()=>navigate("/products")}>Ver produtos</ButtonBlack>
          </BannerPromo>
          <Container>
            <Row className="p-3 g-0 d-flex justify-content-center">
            {products.length>0&&
            <>
              <h2 className="categoryTitle">Os mais vendidos</h2>
              <Carrossel pages={carrosselPages}></Carrossel>
            </>}
            </Row>
          </Container>
        </main>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home;