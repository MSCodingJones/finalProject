import { Link, Outlet } from 'react-router-dom'
import { useState } from "react"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-105">
                        <h1>EllaHoney</h1>
                    </div>
                    <div className="col-md-127">
                        <nav className="nav justify-content-around" id="topNav">
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/store'>Store</Link>
                            <Outlet />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header