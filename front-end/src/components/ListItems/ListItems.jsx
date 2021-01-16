import './ListItems.scss';
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import React from 'react';

function ListItems({warehouses}) {
    return (
        <>
            {warehouses.map((content, id) => (
                <div className='warehouse__card' key={id}>
                  <div className='warehouse__location'>
                    <div className='warehouse__content'>
                      <p className='warehouse__content-title'>warehouse</p>
                      <Link className='warehouse__select'>
                        <p className='warehouse__content-text --link'>
                          {content.name}
                        </p>
                        <img className='warehouse__content-chevron' src={chevronIcon} alt='select icon'/>
                      </Link>
                    </div>
                    <div className='warehouse__content'>
                      <p className='warehouse__content-title'>address</p>
                      <p className='warehouse__content-text'>{content.address}, {content.city}, {content.country}</p>
                    </div>
                  </div>
                  <div className='warehouse__contact'>
                    <div className='warehouse__content'>
                      <p className='warehouse__content-title'>contact name</p>
                      <p className='warehouse__content-text'>
                        {content.contact.name}
                      </p>
                    </div>
                    <div className='warehouse__content'>
                      <p className='warehouse__content-title'>contact information</p>
                      <p className='warehouse__content-text'>
                        {" "}
                        {content.contact.phone}
                      </p>
                      <p className='warehouse__content-text'>
                        {" "}
                        {content.contact.email}
                      </p>
                    </div>
                  </div>
                  <div className='warehouse__links'>
                      <img src={deleteIcon} alt='delete icon' />
                      <img src={editIcon} alt='edit icon' />
                  </div>
                </div>
            ))}
        </>
    )
}

export default ListItems
