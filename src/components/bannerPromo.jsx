import '../styles/bannerPromo.scss'
import ButtonBlack from "./buttonBlack"
import Container from "react-bootstrap/Container"
import { useNavigate } from 'react-router';

const BannerPromo = ({bannerImageUrl, bannerTitle, bannerSubtitle, children})=>{
       const navigate = useNavigate();
       return(
       <>
<<<<<<< HEAD
        <Container className="bannerPromo">
          <div className="bannerPromoImg" style={{backgroundImage: `url(${bannerImageUrl})`}}></div>
          <div className="bannerPromoContent">
              <h1>{bannerTitle}</h1>
              <p>{bannerSubtitle}</p>
              <ButtonBlack buttonLink="/products" handleSubmit={()=>navigate("/products")}>Ver coleção</ButtonBlack>
          </div>
        </Container>
=======
              <Container className="bannerPromo">
                     <div className="bannerPromoImg" style={{backgroundImage: `url(${bannerImageUrl})`}}></div>
                     <div className="bannerPromoContent">
                            <h1>{bannerTitle}</h1>
                            <p>{bannerSubtitle}</p>
                            <ButtonBlack buttonLink="/products" handleSubmit={()=>navigate("/products")}>Ver coleção</ButtonBlack>
                     </div>
              </Container>
>>>>>>> 28fe42894c45ff1193052e5aaf679c305ea501be
       </>
       )
}

export default BannerPromo;