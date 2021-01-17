import React from 'react';
import './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import instockLogo from '../../assets/logo/InStock-Logo.svg'

function Header() {



    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" alt="instock logo" src={instockLogo}/>
            </Link>
            <div className="header__nav">
                <NavLink to="/warehouse"className="header__nav-link"
                activeClassName="--active">Warehouses</NavLink>
                <NavLink to="/inventory"className="header__nav-link"
                activeClassName="--active">Inventory</NavLink>
            </div>
        </div>
    )
}

export default Header
