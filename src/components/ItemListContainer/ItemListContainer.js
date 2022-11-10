import { useEffect, useState, useContext } from "react"
// import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProductsbyCategory } from "../../asyncMock"

import {getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../service/Firebase"
import {NotificationContext } from '../../context/Notification/Notification'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

import './ItemListContainer.css'

import { Spinner } from 'react-bootstrap'

const ItemListContainer = ( { greeting } ) => {

    
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { setNotifiacion } = useContext(NotificationContext)

    const { categoryId } = useParams()

    useEffect(() => {
    const collectionRef = categoryId
        ? query(collection(db, 'products'),where('category', '==', categoryId))
        : collection(db, 'products')
    
    getDocs(collectionRef).then(response => {
        console.log(response)

        const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            console.log(data)
            return {id: doc.id, ...data}
        })

        setProducts(productsAdapted)
    })
    .catch(error => {
        setError(true)
        setNotifiacion('Error', 'No se pudueron trasmitir los datos')
    })
    .finally (() => {
        setLoading(false)
    })
        // if(!categoryId){
        //     getProducts().then(res => {
        //         setProducts(res)
        //     }).catch(error => {
        //         setError(true)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // } else {  
        //     getProductsbyCategory(categoryId).then(res => {
        //         setProducts(res)
        //     }).catch(error => {
        //         setError(true)
        //     }).finally(() => {
        //         setLoading(false)
        //     })
        // }
        
    }, [categoryId])

    if(loading){
        return (
        <div className='spinnercontainer'>
            <Spinner style={{ width: "15rem", height: "15rem" }} animation="border" variant="warning" />
        </div>
        )
    }

    if(error){
        return <h1>Error en la transmision de datos</h1>
    }

    return (
        <div className='container-lg justify-content align-items-center'>
            <h1>{greeting}</h1>
            <ItemList products={ products }/>
        </div>
        
    )
}

export default ItemListContainer