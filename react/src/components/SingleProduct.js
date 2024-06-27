import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const SingleProduct =()=> {

    const [ singleProduct, setSingleProduct ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/product/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setSingleProduct(res.data))
    }, [])

  console.log(singleProduct)

    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`/images/${singleProduct.imgUrl}`} alt={singleProduct.product} className="img-fluid image figure-img" />
                    </div>
                    <div className="col-md-6">
                        <h3>{singleProduct.product}</h3>
                        <p>size: {singleProduct.size}</p>
                        <p>price: ${singleProduct.price}</p>
                        <button className="btn btn=primary cart-btns text-capitalize d-block mx-auto">add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SingleProduct