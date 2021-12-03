import "../styles/home.scss"
import "../styles/index.scss"
import ToggleText from "../components/toggleText"
import CardProduct from "../components/cardProduct"
import axios from "axios"
import { useEffect, useState } from "react"


const toggles = [
  {
  title: "Descrição",
  description: "Vai puxar do back"
  },
  {
  title: "Política de troca",
  description: "A 6pluS2store utiliza tecnologia de ponta para a fabricação de seus produtos, primando pela qualidade e satisfação de seus clientes. Pelo respeito e para que seja mantida a credibilidade conquistada junto aos seus consumidores, a empresa criou uma política de troca e devolução de acordo com o Código de Defesa do Consumidor, e preocupada para que você (cliente) obtenha uma negociação eficaz, ágil e principalmente satisfatória. Caso opte pelo contato via correio eletrônico ou telefônico, será encaminhado a você o formulário para preenchimento e envio junto à(s) peça(s). O produto devolvido sem esse formulário e/ou sem a comunicação ao SAC será reenviado sem consulta prévia. Ao efetuar o processo de devolução/troca o cliente deverá no verso da nota fiscal a ser devolvida/trocada, informar o motivo da devolução/troca, o nome de quem está devolvendo, CPF e a data da devolução."
  }
]


const Products  = ()=>{
 
  const [products,setProducts] = useState([])

  async function fetchProducts(){
    let products = (await axios.get("http://localhost:8080/products")).data.content;
    setProducts(products);
  }
  useEffect(()=>{
    fetchProducts();
  },[])

  return(
    <>    
      {
        products.map((product) => {
          return(
            <CardProduct product={product}></CardProduct>
          )
        })
      }

      
        <ToggleText toggle={toggles[0]}></ToggleText>
        <ToggleText toggle={toggles[1]}></ToggleText>
      
    </>
    )

}

export default Products;


