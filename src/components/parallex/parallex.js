import { Button } from 'react-bootstrap';
import { IoMdArrowDropright } from 'react-icons/io'
import './parallex.css'

function Parallex()
{
    return (
        <div className="parallex text-center py-75">
            <h2 className='mx-auto pb-3'>
                When a man's stomach is full it makes no
                difference whether he is rich or poor.
            </h2>
            <p className="mx-auto w-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
            </p>
            <Button variant="" className="btn secondary-btn lh-lg rounded-0 mt-3"><IoMdArrowDropright className='fs-1'/><a href='www.youtube.com'> Watch Our Story </a></Button>
        </div>
    );
}
export default Parallex;