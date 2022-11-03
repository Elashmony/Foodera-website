import { Card, Container, Button, Row,Col } from 'react-bootstrap';
import './food.css';
import img from '../../Assests/food.1.jpg'
function Food(props)
{
    const { foods } = props
    const foodFun = foods.map(item =>
    {
        return (
            <Col key={item.id} className="mt-3">
                <Card style={{ width: '100%' ,border:'none' }}>
                    <Card.Img variant="top" src={img} className="rounded-4" />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.text}
                        </Card.Text>
                        <span className='me-3'>{item.price}</span>
                        <span className="text-decoration-line-through opacity-50">{item.discount}</span>
                        <hr/>
                        <Button variant="" className="btn primary-btn d-block rounded-0 mt-3">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col> 
        )
    })
    return (
        <div id="foods" className='foods py-75'>
            <div>
                <h1 className="mx-auto">Explore Our Foods</h1>
                <p className="mx-auto mt-3 text-center w-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
                </p>
           </div>
            <Container>
                <Row>
                    {foodFun}   
                </Row>    
            </Container>
        </div>
    );
}
export default Food;
