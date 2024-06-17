import Product from "./Product"

const Store =({ products })=> {

    const productComponents = products.map(product => {
        return <Product 
                    key={product.id}
                    name={product.name}
                    size={product.size}
                    price={product.price}
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