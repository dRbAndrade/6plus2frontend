import { createContext,useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductContextProvider = ({children})=>{

  const [products,setProducts] = useState([]);
  const [productSizes,setProductSizes] = useState([]);
  const [fetch,setFetch] = useState(true)

  const fetchDaily = setInterval(()=>setFetch(true),86400000)

  useEffect(()=>{
    if(fetch){
      axios.get(`http://sixplus2app-env.eba-k2uqnx2t.us-east-1.elasticbeanstalk.com/products?size=100`)
        .then(response=>setProducts(response.data.content));
      axios.get('http://sixplus2app-env.eba-k2uqnx2t.us-east-1.elasticbeanstalk.com/products/sizes')
        .then(response=>setProductSizes(response.data));
      setFetch(false)
    }
    return clearInterval(fetchDaily)
  },[fetch,fetchDaily])

  return(
    <ProductContext.Provider value={{products,setProducts,productSizes,setProductSizes}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;