import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Store from "./components/Store"
import Error from './components/Error'
import Item from './components/Item'

const App=()=> {

    const [ products, setProducts ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/product'

        axios.get(url).then(res => setProducts(res.data))
      //  setProducts(data)
    }, [])

// console.log(product)

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/Store' element={ <Store products={products} />} />
                <Route path='/:store/:id' element={ <Item />} />
                <Route path='*' element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App