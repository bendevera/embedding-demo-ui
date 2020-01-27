import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="header">
                <div className="col m-0 p-0">
                    <div className="row">
                    <div className="btn-group dropright">
                        <button type="button" className="navbar-brand dropdown-toggle brand-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {props.curr_app}
                        </button>
                        <div className="dropdown-menu">
                            <Link to="/" className="dropdown-item">review sentiment classifier</Link>
                        <div className="dropdown-divider"></div>
                            <Link to="/image" className="dropdown-item">natural image classifier</Link>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <a href="https://www.bendevera.com" className="author-heading float-left">by: bendevera.</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;