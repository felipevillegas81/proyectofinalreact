import trash from '../../components/assets/icons/trash.png'

const Cart = ( {id, name, description, quiantity, img} ) =>{

    return (
        <div style={{display: "block", margin: "0", background: "white"}} className='card text-center col-sm-6'>
            <img style={{ width: "50%"}} src={img} alt=""></img>
            <div style={{background: "white"}} className='card-body'>

                <h2 style={{background: "white"}} className='card-title'>{name}</h2>

                <p style={{background: "white"}}
                className="card-text text-secondary">Descripción: {description}</p>

                <p style={{background: "white"}} className="card-text text-secondary">Cantidad Comprada: {quiantity}</p>
                <button className="btn rounded-5 btn-warning">Eliminar</button>
            </div>
        </div>
    )
}

export default Cart