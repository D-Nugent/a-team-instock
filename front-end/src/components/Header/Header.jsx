import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';
import instockLogo from '../../assets/logo/InStock-Logo.svg'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" alt="instock logo" src={instockLogo}></img>
            <div className="header__nav">
                <NavLink to="/warehouse-main"className="header__nav-link"
                activeClassName="--active">Warehouses</NavLink>
                <NavLink to="/inventory-main"className="header__nav-link"
                activeClassName="--active">Inventory</NavLink>
            </div>
        </div>
    )
}

export default Header
