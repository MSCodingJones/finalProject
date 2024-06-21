import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Item =()=> {

    const [ item, setItem ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/store/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setItem(res.data))
    }, [])

  console.log(item)

    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`/images/${props.image}`} alt={props.name} className="img-fluid image figure-img" />
                    </div>
                    <div className="col-md-6">
                        <h3>{props.name}</h3>
                        <p>size: {props.size}</p>
                        <p>price: ${props.price}</p>
                        <h2> describe item</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Item