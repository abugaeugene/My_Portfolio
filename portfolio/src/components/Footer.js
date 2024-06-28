import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Connect With Me</h1>
                <p className="footer-contact-access">Email: abugaeugene@gmail.com</p>
                <p className="footer-contact-access">Mobile: 0725918494</p>
            </div>
            <div>
                <h1 className="social-title">Social Links</h1>
                <div className="social-icons">
                    <a href="https://www.facebook.com/eugene.mogeni.3" target="_blank" rel="noreferrer"><FaFacebook className="social-icon" /></a>
                    <a href="https://x.com/eugenemogs594" target="_blank" rel="noreferrer"><FaTwitter className="social-icon" /></a>
                    <a href="https://www.instagram.com/_eugenekrabz_?igsh=emw1bHYwZDVnbzVh" target="_blank" rel="noreferrer"><FaInstagram className="social-icon" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;