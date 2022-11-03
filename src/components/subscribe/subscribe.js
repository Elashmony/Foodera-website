import { Container, Button } from 'react-bootstrap';
import './subscribe.css'

function Subscribe()
{
    return (
        <div className='subscribe py-75'>
            <Container>
                <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
                <p className='my-4'>Limited time offer for this month. No credit card required.</p>
                <form action='/'>
                    <input type="e-mail" placeholder="Email Adress Here" />
                    <Button variant="" type="submit" className="button rounded-0">Learn More</Button>
                </form>
            </Container>
        </div>

    );
}
export default Subscribe;