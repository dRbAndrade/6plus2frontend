import "../styles/home.scss"
import "../styles/index.scss"
import ToggleText from "../components/toggleText"
import CardProduct from "../components/cardProduct"
import ButtonBlack from "../components/buttonBlack"
import { BsPlusLg } from "react-icons/bs";

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

const products = [
       {
              price: "R$599",
              name: "Nome do tênis",
              category: "Casual"

       },
]


const Products  = ()=>{
 
  return(
    <>
              
              {
                     products.map((product) => {
                            return(
                                   <CardProduct product={product}></CardProduct>
                            )
                     })
              }

              
              {
                     toggles.map((toggle) => {
                            return(
                                   <ToggleText toggle={toggle}></ToggleText>
                            )
                     })
              }

              
 
    </>
    )

}

export default Products;


