import CardProduct from "../components/cardProduct"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/header"
import { Helmet } from "react-helmet"
import Row from "react-bootstrap/Row"
import Col from  "react-bootstrap/Col"
import { BsChevronRight } from "react-icons/bs"
import FilterDropdown from "../components/filter-dropdown"
import "../styles/products.scss"
import { useNavigate } from "react-router"


const Products  = ()=>{
 
  const [products,setProducts] = useState([])
  const navigate = useNavigate();
  async function fetchProducts(){
    let products = (await axios.get("http://localhost:8080/products")).data.content;
    setProducts(products);
  }
  useEffect(()=>{
    fetchProducts();
  },[])

  return(
    <>
      <Helmet>
        <title>Produtos | 6pluS2store</title>
      </Helmet>
      <Header></Header>
      <main>
        <Row className="g-0">
          <h1>Produtos</h1>
        </Row>
        <Row className="g-0">
          <Col className="filters d-flex g-0">
            <span className="filters-text">Filtros</span> 
            <FilterDropdown>Categoria</FilterDropdown>
            <FilterDropdown>Tamanho</FilterDropdown>
          </Col>
        </Row>
        <Row className="products-container g-0">
          {products.map((product) => (
              <CardProduct handleButton={()=>{navigate(`/products/${product.id}`)}} product={product} buttonIcon={<BsChevronRight className="arrowRight"/>}></CardProduct>
          ))}       
        </Row>
      </main>
    </>
  )
}

export default Products;


