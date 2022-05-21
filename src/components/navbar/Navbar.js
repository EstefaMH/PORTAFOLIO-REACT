import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar(){
    return(
        <nav>
            <Link to = "/aboutme" className='item'>Home</Link>
            
        </nav>
    );
}

export default Navbar;