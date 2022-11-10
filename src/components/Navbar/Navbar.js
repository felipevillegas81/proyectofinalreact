import logooptimax from '../assets/img/logooptimax.png'
import Burguerbutton from './BurguerButton'
import { Container } from './Navbar.elements'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import UserSession from '../UserSession/UserSession';

const Navbar = () => {
    return(
        <nav>
            <Container className='container'>
                
                <div className='social'>
                    <div className='usersession'>
                        <UserSession />
                    </div>
                </div>

                <div className='linkscontainer'>
                    <Link className='links' to='/'>Inicio</Link>
                    <Link className='links' to='/category/glasses/'>Gafas</Link>
                </div>

                <div className='logocontainer'>
                    <img className='logo' src={ logooptimax } alt="Logo Optimax"/>
                    <h2 className='companyname'>Optimax <span>Brigadas</span></h2>
                </div>

                <div className='linkscontainer'>
                    <Link className='links' to='/category/lents'>Lentes</Link>
                    <Link  className='links' to='/category/sunglasses'>Gafas de Sol</Link>
                </div>

                <div className='social'>
                    <div className='cartwidget'>
                        <CartWidget />
                    </div>
                    <div className='burguer'>
                        <Burguerbutton />
                    </div>
                </div>
            </Container>
        </nav>
    )
};

export default Navbar
