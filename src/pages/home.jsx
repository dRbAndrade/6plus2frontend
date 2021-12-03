import "../styles/home.scss"
import Header from "../components/header"
import { Helmet } from "react-helmet"
const Home  = ()=>{
 
  return(
    <>
      <Helmet>
        <title>6pluS2store</title>
      </Helmet>
      <Header></Header>
      <main></main>
    </>
    )

}

export default Home;