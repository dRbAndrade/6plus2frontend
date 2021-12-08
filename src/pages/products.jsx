import CardProduct from "../components/cardProduct"
import {useEffect, useState, useContext } from "react"
import Header from "../components/header"
import Row from "react-bootstrap/Row"
import Col from  "react-bootstrap/Col"
import { BsChevronRight } from "react-icons/bs"
import FilterDropdown from "../components/filter-dropdown"
import "../styles/products.scss"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"
import { ProductContext } from "../contexts/ProductContext"


const Products  = (props)=>{

  const search = useLocation().search;
  const navigate = useNavigate();
  const {products,productSizes} = useContext(ProductContext);
  const [view,setView] = useState(products);
  
  useEffect(()=>{
    const params = new URLSearchParams(search);
    const category = params.get("category");
    const size = params.get("productSize");
    setView(products.filter(product=>{
      const productSizesList = productSizes.filter(size=>size.productId===product.id).map(e=>e.size)
      if(category&&size) {
        return product.category.toLowerCase()===category&&productSizesList.includes(size)
      }else if(category){
        return product.category.toLowerCase()===category
      }else if(size){
        return productSizesList.includes(size)
      }else{
        return true
      }
    }))
  },[search,products,productSizes])

  function handleFilter(param){
    let url = window.location.href.replace(/.*(?=\/products)/,"")
    param = param.replace("categories","category");
    param = param.replace("Sizes","Size");
    if(url.includes("category")&&param.includes("category")){
      url = url.replace(/category=[^0-9&]*/g,param)
      if(param.includes("category=reset")){
        url = url.replace("category=reset","")
        url = url.replace("&","");
        if(!url.includes("productSize")){
          url.replace("?","")
        }
      }
    }else if(url.includes("productSize")&&param.includes("productSize")){
      url = url.replace(/productSize=[^a-zA-Z&]*/g,param)
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
        <Header/>
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
            {view.map((product) => (
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


