import { CartContext  } from '../../context/CartContext'
import { useContext } from 'react'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

const CartList = () =>{

    const { getCart, total } = useContext(CartContext)
    const cart = getCart()

    if(cart.length === 0){
        return (
            <div className='container-lg justify-content align-items-center'>
                
                    <div style={{display: "block", margin: "0", background: "white"}} className='card text-center col-sm-12'>
                        <div style={{background: "white"}} className='card-body'>
                            <h2 style={{background: "white"}} className='card-title'>No Agregaste Ningun Producto</h2>
                        </div>
                    </div>
                
            </div>

        )
    }

    return(
        <div className='container-lg justify-content align-items-center'>
            <div className='row'>
                {cart.map( product =>
                    <Cart key={product.id} {...product}/>
                    )
                }
            </div>
            
            <div className='container-lg justify-content align-items-center'>
                
                <div style={{display: "block", margin: "10px", padding: "10px", background: "white"}} className='card text-center col-14'>
                    <div style={{background: "white"}} className='card-body'>
                        <h2 style={{background: "white"}} className='card-title'>Total Compra: {total}</h2>
                    </div>
                    <div style={{ background: "white"}}>
                    <Link className="btn rounded-5 btn-warning" to='/purshaseform'>Finalizar Compra</Link>
                    </div>
                </div> 
            </div>                    
        </div>
                

    )
}

export default CartList