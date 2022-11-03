import { Button } from "react-bootstrap";
import './Header.css'
import { RiShoppingBasketFill } from 'react-icons/ri'
function Header()
{
    return (
        <div id="home" className="header">
            <div className="container">
                <div className="py-75">
                    <h1 className="pt-md-5">Good food choices <br /> are good <br /> investments.</h1>
                    <p className="py-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Etiam et purus a odio finibus bibendum amet leo.</p>
                    <Button variant="" className="btn secondary-btn rounded-0 d-md-inline d-sm-block mt-3 me-3">Order Now  <RiShoppingBasketFill /></Button>
                    <Button variant="" className="btn primary-btn  rounded-0 mt-3">Learn More</Button>
                </div>
            </div>
        </div>
    );
}
export default Header;