import '../styles/footer.scss'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFillHeartFill} from 'react-icons/bs'

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="company">
                    <a href="/" className="company-link"><BsFillHeartFill className="bs-icon"></BsFillHeartFill></a>
                    <span>© 2021 6pluS2store</span>
                </div>

                <ul className="icons">
                    <li><a className="icons-link" href="/"><BsInstagram className="bs-icon"></BsInstagram></a></li>
                    <li><a className="icons-link" href="/"><BsFacebook className="bs-icon"></BsFacebook></a></li>
                    <li><a className="icons-link" href="/"><BsTwitter className="bs-icon"></BsTwitter></a></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;