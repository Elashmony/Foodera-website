import { Button } from "react-bootstrap";
import feature from './../../Assests/feature.1.png'
import "./feature.css"
function Feature()
{
    return (
        <div id="about" className="feature pt-75">
            <div className="container d-md-flex justify-content-between align-items-center d-sm-block">
                <div className="featurImg">
                    <img src={feature} className="w-100 rounded-4" alt="not found"/>
                </div>
                <div className="featureText pt-3">
                    <h2>We pride ourselves on making real food from the best ingredients.</h2>
                    <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.Mauris feugiat erat tellus.</p>
                    <Button variant="" className="btn primary-btn rounded-0 ">Learn More</Button>
                </div>
                
            </div>
        </div>
    )
}
export default Feature;