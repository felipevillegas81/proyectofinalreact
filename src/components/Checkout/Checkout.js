import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../service/Firebase'

import Purshaseform from "../Form/Purshaseform"

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { total, clearCart } = useContext(CartContext)

    const { getCart } = useContext(CartContext)
    const cart = getCart()

    const createOrder = async () => {
    setLoading(true)
    try {
    const objOrder = {
        buyer: {
            name: 'Andrés Felipe',
            phone: '3138670321',
            email: 'felipevillegas81@gmail.com'
        },

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
        return <h1>Su Orden Se esta Generando</h1>
    }

    return(
        <Purshaseform />
    )
}

export default Checkout