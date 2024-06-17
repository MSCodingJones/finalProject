import { Link } from 'react-router-dom'

const Product =(props)=> {

    console.log(props)

    return (
        <div className="col">
            <figure className="figure">
                <Link to={'/store/${props.id}'}>
                <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid image figure-img" />
                <figcaption className="figure-caption"> 
                    {props.name} | price: ${props.price}           
                </figcaption> 
                </Link>
            </figure>
        </div>
    )
}

export default Product