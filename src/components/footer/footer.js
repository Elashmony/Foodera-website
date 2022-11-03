import './footer.css'
import { FaFacebookF, FaLinkedinIn ,FaYoutube }from 'react-icons/fa'
import { BsTwitter, BsInstagram }from 'react-icons/bs'


function Footer()
{
    return(
        <footer>
            <div>
                <div className='links'>
                    <a href="#">Register</a>
                    <a href="#">Forum</a>
                    <a href="#"> Affiliate</a>
                    <a href="#">FAQ</a>
                </div>
                <div className='icons'>
                    <a href='www.facebook.com'> <FaFacebookF/></a>
                    <a href='www.twitter.com'> <BsTwitter /></a>
                   <a href='www.youtube.com'> <FaYoutube /></a>
                    <a href='www.linkedin.com'> <FaLinkedinIn /></a>
                    <a href='www.instagram.com'> <BsInstagram/></a >
                </div>
                <p>© 2021. Foodera. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;