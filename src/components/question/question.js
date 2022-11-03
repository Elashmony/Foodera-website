import { Container } from 'react-bootstrap';
import "./question.css"



function Question(props)
{
    const { question } = props
    const quesFunc = question.map(item =>
    {
        return (
            <div className='question' key={item.id}>
                <p className="fw-bold mt-5"> {item.question} </p>
                <p> {item.answer} </p>
            </div>
        );
    })
    return (
        <div id="faq" className='py-75'>
            <Container>
                <h1 className='mx-auto' style={{width:'fit-content'}}>Frequently Asked Questions</h1>
                <div className="d-flex flex-wrap pt-3">
                    {quesFunc}
                </div>
            </Container>
        </div>
    );
}
export default Question;