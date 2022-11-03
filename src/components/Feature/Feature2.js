import { Button} from "react-bootstrap";
import feature from './../../Assests/feature.2.png'
import { FaCheck } from 'react-icons/fa'
import "./feature.css"
function Feature2()
{
    return (
        <div className="feature2 py-75">
            <div className="container d-md-flex justify-content-between align-items-center d-sm-block">
                <div className="featureText2">
                    <h2 className="pt-5">We make everything by hand with the best possible ingredients.</h2>
                    <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p >
                        <FaCheck className="fs-3" /> {"  "}
                        Etiam sed dolor ac diam volutpat.
                    </p>
                    <p>
                        <FaCheck className="fs-3" /> {"  "}
                        Erat volutpat aliquet imperdiet.
                    </p>
                    <p >
                        <FaCheck className="fs-3" /> {"  "}
                        purus a odio finibus bibendum.
                    </p>
                    <Button variant="" className="button rounded-0 ">Learn More</Button>
                </div>
                <div className="featurImg2 pt-3">
                    <img src={feature} className="w-100 rounded-4" alt="not found" />
                </div>
            </div>
        </div>
    )
}
export default Feature2;