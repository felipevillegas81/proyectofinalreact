import { Link } from "react-router-dom"

const Item = ( { id, name, description, img } ) => {

    return(
                <div style={{background: "white", padding: "10px", margin: "10px"}} className="card text-center">
                <img style={{background: "white"}} src={img} alt={`${description}`}></img>
                <div style={{background: "white"}} className="card-body">
                    <h4 style={{background: "white"}} className='card-title'>{name}</h4>
                    <p style={{background: "white"}} className="card-text text-secondary">{description}</p>
                    <Link key={id} to={`/detail/${id}`} type="button" className="btn rounded-5 btn-warning">Detalle</Link>
                </div>
                </div>
        
    )
}

export default Item
