import Button from "react-bootstrap/Button"
import '../styles/buttonBlack.scss'
import { Link, NavLink } from 'react-router-dom';
const ButtonBlack = ({buttonIcon, buttonContent, buttonLink, className}) => {
       return(
              <>
                     <Button className={`${className} w-100`} bsPrefix="buttonBlack"><NavLink to={`${buttonLink}`}>{buttonContent} {buttonIcon}</NavLink></Button>
              </>
       )

}

export default ButtonBlack;