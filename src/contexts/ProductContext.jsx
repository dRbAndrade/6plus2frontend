import { createContext,useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductContextProvider = ({children})=>{

  const [products,setProducts] = useState([]);
  const [categories,setCategories] = useState([]);
  const [productSizes,setProductSizes] = useState([]);
  const [fetch,setFetch] = useState(true)

  const fetchDaily = setInterval(()=>setFetch(true),86400000)

  useEffect(()=>{
    if(fetch){
      axios.get(`https://sixplustwostore.herokuapp.com/products?size=100`)
        .then(response=>setProducts(response.data.content));
      axios.get('https://sixplustwostore.herokuapp.com/products/sizes')
        .then(response=>setProductSizes(response.data));
      axios.get('https://sixplustwostore.herokuapp.com/categories')
        .then(response=>setCategories(response.data.content));
      setFetch(false)
    }
    return clearInterval(fetchDaily)
  },[fetch,fetchDaily])

  return(
    <ProductContext.Provider value={{categories,products,productSizes}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;