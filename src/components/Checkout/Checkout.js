import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/Firebase'

import { Spinner } from 'react-bootstrap'

const Checkout = ( { buyer } ) => {

    const [loading, setLoading] = useState(false)

    const { total } = useContext(CartContext)

    const { getCart, clearCart } = useContext(CartContext)
    const cart = getCart()

    const [validate, setValidate] = useState(false)

    const createOrder = async () => {
    setLoading(true)
    try {
    const objOrder = {
        
        buyer,
        Items: cart,
        total
    }

    const ids = cart.map ( product => product.id)
    const productsRef = collection(db, 'products')

    const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
    const { docs } = productsAddedFromFirestore

    const batch = writeBatch(db)
    const outOfStock = []

    docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock

        const productAddedToCart = cart.find(product => product.id === doc.id)
        const prodQuantity = productAddedToCart?.quiantity

        if(stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity})
        }else {
            outOfStock.push({id: doc.id, ...dataDoc})
        }
    })

    if(outOfStock.length === 0){
        await batch.commit()

        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)
        setValidate(true)
        console.log(`El Id de su Orden es: ${orderAdded.id}`)
        clearCart()
        
    } else {
        console.log('Existen productos agregados agotados')
    }

    } catch (error){
        console.log(error)
    } finally {
        setLoading(false)
    }
}

    if(loading) {
        return (
            <div className='spinnercontainer'>
                <Spinner style={{ width: "15rem", height: "15rem" }} animation="border" variant="warning" />
            </div>
        )
    }

    if(validate === true){
        return(
            <div style={{background: "white", padding: "10px", margin: "10px"}} className="card text-center">
                <div style={{background: "white"}} className="card-body">
                    <h4 style={{background: "white"}} className='card-title'>Se Genero Orden No:</h4>
                    <p style={{background: "white"}} className="card-text text-secondary">Nombre Comprador: {buyer.name}</p>
                    <p style={{background: "white"}} className="card-text text-secondary">Telefono: {buyer.phone}</p>
                    <p style={{background: "white"}} className="card-text text-secondary">Correo: {buyer.email}</p>
                    <p style={{background: "white"}} className="card-text text-secondary">Dirección: {buyer.address}</p>
                    
                </div>
                </div>
        )
    }

    if(validate === false)
    return(
        createOrder()
    )

}

export default Checkout