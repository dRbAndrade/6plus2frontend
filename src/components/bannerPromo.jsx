import '../styles/bannerPromo.scss'
import ButtonBlack from "./buttonBlack"
import Container from "react-bootstrap/Container"

const BannerPromo = ({bannerImageUrl, bannerTitle, bannerSubtitle, children})=>{
       return(
       <>
              <Container className="bannerPromo">
                     <div className="bannerPromoImg" style={{backgroundImage: `url(${bannerImageUrl})`}}></div>
                     <div className="bannerPromoContent">
                            <h1>{bannerTitle}</h1>
                            <p>{bannerSubtitle}</p>
                            <ButtonBlack>Ver produtos</ButtonBlack>
                     </div>
                     
              </Container>
       </>
       )
}

export default BannerPromo;