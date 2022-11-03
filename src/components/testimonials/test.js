import Carousel from 'react-bootstrap/Carousel';
import {Container} from 'react-bootstrap'
import './test.css'
import img from '../../Assests/team-1.jpg'
function Testimonials(props)
{
    const { test } = props;
    const TestFun = test.map(item =>
    {
        return (
            <Carousel.Item interval={1000} key={item.id}>
                <img
                    className="d-block"
                    src={img}
                    alt="First slide"
                />
                <Carousel.Caption className="position-static w-75 mx-auto">
                    <p className='fs-5 w-75 mx-auto'>{ item.text }</p>
                    <h4>{ item.name }</h4>
                </Carousel.Caption>
            </Carousel.Item>
        );
    })
    return (
        <div id="reviews" className='test py-75'>
            <Container>
                <h1>Testimonials</h1>
                <Carousel className="slider">
                    {TestFun}
                </Carousel>
            </Container>
        </div>
    );
}

export default Testimonials;