import { useState, useEffect } from "react"
// import { getProduct } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../service/Firebase'

import { Spinner } from 'react-bootstrap'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({ addItem }) => {

    const [product, setProduct] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect (() => {
        const docRef = doc(db, 'products', productId)
        
        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            setError(true)
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // getProduct(productId).then(response => {
        //     setProduct(response)
        // }).catch(error => {
        //     setError(true)
        // }).finally(() => {
        //     setLoading(false)
        // })
    },[productId])

    if(loading){
        return (
            <div className='spinnercontainer'>
                <Spinner style={{ width: "15rem", height: "15rem" }} animation="border" variant="warning" />
            </div>
        )
    }

    return(
        <div className='container-lg justify-content align-items-center'>
            <ItemDetail {...product} setCart={ addItem } />
        </div>
    )
        
}

export default ItemDetailContainer