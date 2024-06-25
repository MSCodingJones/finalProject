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
import AddUser from './components/AddUser'
import Form from "./components/Form"

const App=()=> {
    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: ''
    })

    const [ user, setUser ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/user').then(res => setUser(res.data))

    }, [])
 //   console.log(users)
    
    const handleChange =(event)=> {
        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if (regex.test(formData.password) === false ) {
            alert('Password not valid.\nMust contain:\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character &\n-at least 8 characters')
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }

    }
    const [ products, setProducts ] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3005/api/product'

        axios.get(url).then(res => setProducts(res.data))
    //         setProducts(data)
    }, [])

console.log(products)

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/store' element={ <Store />} />
                <Route path='/store/:id' element={ <SingleProduct />} />
                <Route path='/adduser' element={ <Form />} />
                <Route path='*' element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App