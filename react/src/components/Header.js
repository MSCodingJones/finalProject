import { Link, Outlet } from 'react-router-dom'

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>EllaHoney</h1>
                    </div>
                    <div className="col-md-8">
                        <nav className="nav justify-content-around" id="topNav">
                            <Link to='/'>home</Link>
                            <Link to='/about'>about</Link>
                            <Link to='/store'>store</Link>
                            <Outlet />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header