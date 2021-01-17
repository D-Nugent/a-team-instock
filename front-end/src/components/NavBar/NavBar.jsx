import React from "react";
import "./NavBar.scss";
import ArrowIcon from "../../assets/icons/sort-24px.svg";
import { useRouteMatch } from "react-router-dom";


function NavBar() {
  const route = useRouteMatch()

  return (
    <div className='nav'>
      <div className='nav__content'>
        <h4 className='nav__content-text'>{route.path === "/warehouse"?'warehouse':'inventory item'}</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className='nav__content'>
        <h4 className='nav__content-text'>{route.path === "/warehouse"?'address':'category'}</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className={`nav__content${route.path === "/warehouse" ? "":" --pull"}`}>
        <h4 className='nav__content-text'>{route.path === "/warehouse"?'contact name':'status'}</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className={`nav__content${route.path === "/warehouse"?"":" --shift"}`}>
        <h4 className='nav__content-text'>{route.path === "/warehouse"?'contact information':'quantity'}</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className='nav__content'>
        <h4 className='nav__content-text'>actions</h4>
      </div>
    </div>
  );
}

export default NavBar;
