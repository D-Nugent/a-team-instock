import React from "react";
import "./NavBar.scss";
import ArrowIcon from "../../assets/icons/sort-24px.svg";
import { useRouteMatch } from "react-router-dom";


function NavBar({ path }) {
  return (
    <div className='nav'>
      <div className='nav__content'>
        {path ? (
          <h4 className='nav__content-text'>warehouse</h4>
        ) : (
          <h4 className='nav__content-text'>inventory item</h4>
        )}
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      {path ? (
        <div className='nav__content'>
          <h4 className='nav__content-text'>address</h4>

          <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
        </div>
      ) : (
        <div className='nav__content-category'>
          <h4 className='nav__content-text'>category</h4>

          <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
        </div>
      )}
      {!path && (
        <div className='nav__content'>
          <h4 className='nav__content-text'>status</h4>
          <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
        </div>
      )}
      {path ? (
        <div className='nav__contact'>
          <div className='nav__content'>
            <h4 className='nav__content-text'>contact name</h4>

            <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
          </div>

          <div className='nav__content'>
            <h4 className='nav__content-text'>contact information</h4>
            <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
          </div>
        </div>
      ) : (
        <div className='nav__contact-inventory'>
          <div className='nav__content'>
            <h4 className='nav__content-text'>qty</h4>

            <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
          </div>

          <div className='nav__content'>
            <h4 className='nav__content-text'>warehouse</h4>
            <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
          </div>
        </div>
      )}
      <div className='nav__content'>
        <h4 className='nav__content-text'>actions</h4>
      </div>
    </div>
  );
}

export default NavBar;
