import React from "react";
import "./NavBar.scss";
import ArrowIcon from "../../assets/icons/sort-24px.svg";


function NavBar({ path, sortToggle }) {

  const sortData = (event) => {
  sortToggle(event.target.getAttribute('data-sort-field'))
  }
  return (
    <div className='nav'>
      <div className='nav__content'>
        {path ? (
          <h4 className='nav__content-text' data-sort-field="name" onClick={(event)=>{sortData(event)}}>warehouse</h4>
        ) : (
          <h4 className='nav__content-text' data-sort-field="itemName"onClick={(event)=>{sortData(event)}}>inventory item</h4>
        )}
        <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
      </div>
      {path ? (
        <div className='nav__content'>
          <h4 className='nav__content-text' data-sort-field="address"onClick={(event)=>{sortData(event)}}>address</h4>

          <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
        </div>
      ) : (
        <div className='nav__content-category'>
          <h4 className='nav__content-text' data-sort-field="category"onClick={(event)=>{sortData(event)}}>category</h4>

          <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
        </div>
      )}
      {!path && (
        <div className='nav__content'>
          <h4 className='nav__content-text' data-sort-field="status"onClick={(event)=>{sortData(event)}}>status</h4>
          <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
        </div>
      )}
      {path ? (
        <div className='nav__contact'>
          <div className='nav__content'>
            <h4 className='nav__content-text' data-sort-field="contactname"onClick={(event)=>{sortData(event)}}>contact name</h4>

            <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
          </div>

          <div className='nav__content'>
            <h4 className='nav__content-text' data-sort-field="contactemail"onClick={(event)=>{sortData(event)}}>contact information</h4>
            <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
          </div>
        </div>
      ) : (
        <div className='nav__contact-inventory'>
          <div className='nav__content'>
            <h4 className='nav__content-text' data-sort-field="quantity"onClick={(event)=>{sortData(event)}}>qty</h4>

            <img src={ArrowIcon} alt='nav arrows' className='nav__img'></img>
          </div>

          <div className='nav__content'>
            <h4 className='nav__content-text' data-sort-field="warehouseName"onClick={(event)=>{sortData(event)}}>warehouse</h4>
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
