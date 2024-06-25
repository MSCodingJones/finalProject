import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Store from "./components/Store"
import Error from './components/Error'
import SingleProduct from './components/SingleProduct'
import CreateAccount from './components/User'

const App=()=> {

//     const [ products, setProducts ] = useState([])

//     useEffect(()=> {
//         const url = 'http://localhost:3005/api/product'

//         axios.get(url).then(res => setProducts(res.data))
//       //  setProducts(data)
//     }, [])

// console.log(products)

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/store' element={ <Store />} />
                <Route path='/store/:id' element={ <SingleProduct />} />
                <Route path='*' element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App