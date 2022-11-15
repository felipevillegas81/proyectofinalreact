import { Link } from 'react-router-dom'

import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { NotificationContext } from '../../context/Notification/Notification'

    const InputCount = ({onConfirm, stock, initial = 1}) => {
        const [count, setCount] = useState(initial)
    
        const handleChange = (e) => {
            if(e.target.value <= stock) {
                setCount(e.target.value)
            }
        }
    
        return (
            <div>
                <input type='number' onChange={handleChange} value={count}/>
                <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
            </div>
        )
    }


    const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
        const [count, setCount] = useState(initial)
    
        const increment = () => {
            if(count < stock) {
                setCount(count + 1)
            }
    
        }
    
        const decrement = () => {
            if(count > 1){
                setCount(count - 1)
            }
        }
    
        return (
            <>
                    <p style={{background: "white"}}>Productos a Agregar: {count}</p>
                    <button style={{margin: "10px"}} className="btn rounded-5 btn-warning" onClick={increment}>Agregar</button>
                    <button style={{margin: "10px"}} className="btn rounded-5 btn-warning" onClick={decrement}>Quitar</button>
                    <button style={{margin: "20px"}} className="btn rounded-5 btn-warning" onClick={() => onConfirm(count)}>Agregar al Carrito</button>
            </>
        )
    }

    const ItemDetail = ( { id, name, description, stock, price, img } ) => {

    const { addItem } = useContext(CartContext)
    
    const { setNotification } = useContext(NotificationContext)

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const [inputType, setInputType] = useState('button')

    const [quiantityToAdd, setQuiatityToAdd] = useState(0)

    const handleOnAdd = (quiantity) => {
        setQuiatityToAdd(quiantity)

        const productToAdd = {id, name, price, description, stock , quiantity, img}

        addItem(productToAdd)

        setNotification('success',`Se agregaron ${quiantity} ${name}`)
    }

    const Count = (inputType) === 'button' ? ButtonCount : InputCount

    return(

        <div style={{display: "block", margin: "0", background: "white"}} className='card text-center col-sm-12'>
            <img style={{ width: "50%"}} src={img} alt=""></img>
            <div style={{background: "white"}} className='card-body'>
                <h2 style={{background: "white"}} className='card-title'>{name}</h2>
                <p style={{background: "white"}} className="card-text text-secondary">{description}</p>
                <div>
                    <p style={{background: "white"}} className="card-text">Stock: {stock}</p>
                </div>

                <div>
                    <p style={{background: "white"}} className="card-text">Precio: {price}</p>
                </div>



                <div style={{ padding: "20px", background: "white"}}>
                {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to='/cart'>Finalizar Compra</Link>
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail