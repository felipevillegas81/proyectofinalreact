import Item from "../Item/Item"

const ItemList = ( { products } ) => {

    return(
        <div className='container-lg justify-content align-items-center'>
            <div className='row'>
                {products.map(product => 
                    <div className='col-md-6 ' key={product.id}>
                        <Item {...product} />
                    </div >
                    
                )
                }
            </div>
        </div>
    )
}

export default ItemList