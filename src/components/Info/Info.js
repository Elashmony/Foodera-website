import "./Info.css"
import { Container, Stack } from "react-bootstrap";
import CountUp from 'react-countup';
import VisibilitySeneor from "react-visibility-sensor" 

function Info(props)
{
    const { info } = props;
    const funInfo = info.map(item =>
    {
        return (
            <div key={item.id}>
                <CountUp
                start={0}
                end={item.value}
                duration={1}
                >
                    {({ countUpRef,start })=>(
                        <VisibilitySeneor onChange={start} delayedCall>
                            <h2 ref={countUpRef} />
                        </VisibilitySeneor>
                    )}
                </CountUp>
                <span>{item.title}</span>
            </div>
        )
    }) 
    
    return (
        <div className="info py-5">
            <Container>
                <Stack direction="horizontal">
                    {funInfo}
                </Stack>
            </Container>
        </div>
    );
}

export default Info;
 