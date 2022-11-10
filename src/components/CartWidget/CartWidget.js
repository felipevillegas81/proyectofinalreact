import carticon from '../assets/icons/cart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext  } from '../../context/CartContext'

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)
    const totalQuantity = getTotalQuantity()

    if (totalQuantity === 0){
        return(
        <Link style={{color: 'white'}} to='./cart' path='/cart'>
            <div>
                <img style={{ width: "2rem", height: "2rem" }} src={ carticon } alt='Cart Widget' />
            </div>
        </Link>
        )
    }

    return (
        <Link style={{color: 'white'}} to='./cart' path='/cart'>
            <div>
            { totalQuantity }
            </div>
            <img style={{ width: "2rem", height: "2rem" }} src={ carticon } alt='Cart Widget' /> 
        </Link>
    );
}

export default CartWidget