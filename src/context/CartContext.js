import { useEffect } from "react"
import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ( { children } ) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        } else {
            console.log('El Producto Ya Existe')
        }
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    } 

    const removeItem = (id) =>{
        const cartWithoutItem = cart.filter(product => product.id !== id)
        setCart(cartWithoutItem)
    }

    // useEffect(() => {
    //     const totalQuantity = gettotalQuantity()
    //     setTotalQuantity(totalQuantity)
    // }, [cart])

    useEffect(() =>{
        const total = getTotal()
        setTotal(total)
    },[cart])
        

    const getTotalQuantity = (product) => {
        let totalQuantity = 0

        cart.forEach( product => {
            totalQuantity += product.quiantity
        })

        return (totalQuantity)
        
    }

    const getCart = () => {
        let cartProducts= []
        cartProducts = cart

        return(cartProducts)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalPrice = (product) => {
        let totalPrice = 0

        cart.forEach( product => {
            totalPrice += product.price
        })

        return (totalPrice)
        
    }

    const getTotal = () => {
        let accu = 0

        cart.forEach( product => {
            accu += product.quiantity * product.price
        })

        return (accu)
        
    }

    return(
        <CartContext.Provider value={{ getCart, clearCart, addItem, removeItem, getTotalQuantity, getTotalPrice, total }}>
            {children}
        </CartContext.Provider>
    )
}