import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home"
import About from "./components/About"
import Store from "./components/Store"

const App=()=> {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/Store' element={ <Store />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App