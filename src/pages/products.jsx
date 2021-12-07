import CardProduct from "../components/cardProduct"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../components/header"
import Row from "react-bootstrap/Row"
import Col from  "react-bootstrap/Col"
import { BsChevronRight } from "react-icons/bs"
import FilterDropdown from "../components/filter-dropdown"
import "../styles/products.scss"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"


const Products  = (props)=>{

  const search = useLocation().search;
  
  useEffect(()=>{
    const searchParams = new URLSearchParams(search);
    fetchProducts(searchParams.get("category"),searchParams.get("productSize"));
  },[search])
  
  const [products,setProducts] = useState([]);
  const navigate = useNavigate();
  
  async function fetchProducts(category,productSize){
    let url = `http://localhost:8080/products`;
    if(category&&productSize)url+=`?category=${category}&productSize=${productSize}`;
    else if(category)url+=`?category=${category}`;
    else if(productSize)url+=`?&productSize=${productSize}`;
    let products = (await axios.get(url)).data.content;
    setProducts(products);
  }
  function handleFilter(param){
    let url = window.location.href.replace("http://localhost:3000","");
    param = param.replace("categories","category");
    param = param.replace("Sizes","Size");    
    if(url.includes("category")&&param.includes("category")){
      url = url.replace(/category=[0-9]*/g,param)
      if(param.includes("category=reset")){
        url = url.replace("category=reset","")
        url = url.replace("&","");
        if(!url.includes("productSize")){
          url.replace("?","")
        }
      }
    }else if(url.includes("productSize")&&param.includes("productSize")){
      url = url.replace(/productSize=[0-9]*/g,param)
      if(param.includes("productSize=reset")){
        url = url.replace("productSize=reset","")  
        url = url.replace("&","");
        if(!url.includes("category")){
          url.replace("?","")
        }
      }
    }else if(url.includes("?")){
      url+=`&${param}`
    }else{
      url+=`?${param}`
    }
    navigate(url)
  }

  return(
    <>
      <Helmet><title>Products | 6pluS2store</title></Helmet>
      <div>
        <Header></Header>
        <main>
          <Row className="g-0 px-3">
            <h1>Produtos</h1>
          </Row>
          <Row className="g-0 px-3">
            <Col className="filters d-flex g-0">
              <span className="filters-text">Filtros</span> 
              <FilterDropdown param="categories" handleFilter={handleFilter}>Categoria</FilterDropdown>
              <FilterDropdown param="productSizes" handleFilter={handleFilter}>Tamanho</FilterDropdown>
            </Col>
          </Row>
          <Row className="products-container g-0 px-3">
            {products.map((product) => (
                <CardProduct key={product.id} handleButton={()=>{navigate(`/products/${product.id}`)}} product={product} buttonIcon={<BsChevronRight className="arrowRight"/>}></CardProduct>
            ))}       
          </Row>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default Products;


