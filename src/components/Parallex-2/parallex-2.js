import { Container, Stack, Button } from 'react-bootstrap';
import './parallex-2.css'

function Parallex2()
{
    return (
        <div className='parallex2 '>
            <div className='overlay py-75'>
               <Container>
                    <Stack direction="horizontal" className='pe-lg-5 '>
                        <h1>Baked fresh daily by bakers with passion.</h1>
                        <Button variant="" className="btn primary-btn ms-md-5 rounded-0">Learn More</Button>
                    </Stack>
                </Container>
            </div>
        </div>
            
    );
}
export default Parallex2;