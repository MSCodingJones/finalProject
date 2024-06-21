import { Link } from 'react-router-dom'

const Product =(props)=> {

   console.log(props)

    return (
        <div className="col">
            <figure className="figure">
                <Link to={`/store/${props.id}`}>
                <img src={`/images/${props.image}`} alt={props.name} className="img-fluid image figure-img" />
                <figcaption className="figure-caption"> 
                    {props.name}  price: ${props.price}           
                </figcaption> 
                </Link>
            </figure>
        </div>
    )
}

export default Product