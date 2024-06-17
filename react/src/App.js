import { Routes, Route } from 'react-router-dom'
import { Routes, Route, useParams } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Store from "./components/Store"
import Error from './components/Error'
import Single from './components/Single'

const App=()=> {

    const [ products, setProducts ] = useState([])

    useEffect(()=> {
        setProducts(data)
    }, [])

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/Store' element={ <Store products={products} />} />
                <Route path='/:store/:id' element={ <Single />} />
                <Route path='*' element={ <ErrorPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App