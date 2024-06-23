import { useState, useEffect } from "react"
import axios from 'axios'

import Product from "./Product"

const Store =()=> {
   
    const [ Products, setProducts ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/product'

        axios.get(url).then(res => setProducts(res.data))
      //  setProducts(data)
    }, [])

 console.log(products)

    const productComponents = products.map(product => {
        return <Product 
                    key={product.product_id}
                    id={product.product_id}
                    name={product.product}
                    size={product.size}
                    price={product.price}
                    image={product.imgUrl}
                />
    })

    return (
        <main className="main">
            <div className="container">
                <h2>Store</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {productComponents}
                </div>
            </div> 
        </main>
    )
}

export default Store