const Item =(props)=> {

    console.log(props)

    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://via.placeholder.com/50x50" alt="placeholder img" className="img-fluid image" />
                    </div>
                    <div className="col-md-6">
                        <h3>{props.name}</h3>
                        <p>size: {props.size}</p>
                        <p>price: ${props.price}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Item