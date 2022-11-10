const products = [

    {
        id: '1',
        img: '',
        name: 'Gafas Rojas',
        price: 200000,
        category: 'glasses',
        stock: 50,
        description: 'Gafas de Marco Grueso Color Rojo'
    },

    {
        id: '2',
        img: '',
        name: 'Lentes Negros',
        price: 300000,
        category: 'lents',
        stock: 20,
        description: 'Lentes Color Negro Profundo'
    },

    {
        id: '3',
        img: '',
        name: 'Gafas de Sol Color Cafe',
        price: 300000,
        category: 'sunglasses',
        stock: 20,
        description: 'Gafas de Sol con Filtro UV'
    },

    {
        id: '4',
        img: '',
        name: 'Gafas de Sol Color Negro',
        price: 300000,
        category: 'sunglasses',
        stock: 40,
        description: 'Gafas de Sol con Filtro UV'
    }
]


// export const getProducts = () => {
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 100)
//     })
// }

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 100)
    })
}

export const getProductsbyCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 100)
    })
}
