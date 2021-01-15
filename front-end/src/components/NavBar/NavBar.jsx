import React from "react";
import "./NavBar.scss";
import ArrowIcon from "../../assets/icons/sort-24px.svg";

function NavBar() {
  return (
    <div className='nav'>
      <div className='nav__content'>
        <h4 className='nav__content-text'>warehouse</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className='nav__content'>
        <h4 className='nav__content-text'>address</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className='nav__content'>
        <h4 className='nav__content-text'>contact name</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className='nav__content'>
        <h4 className='nav__content-text'>contact information</h4>
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      <div className='nav__content'>
        <h4 className='nav__content-text'>actions</h4>
      </div>
    </div>
  );
}

export default NavBar;
