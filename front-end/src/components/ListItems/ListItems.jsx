import './ListItems.scss';
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import { Link, useRouteMatch } from "react-router-dom";
import React from 'react';

function ListItems({listData}) {
  const route = useRouteMatch()
  console.log(listData);
  console.log(route);
    return (
        <div className="container">
            {listData.map((content, id) => (
                <div className='container__card' key={id}>
                  <div className='container__location'>
                    <div className='container__content'>
                      <p className='container__content-title'>{route.path === '/warehouse'?`warehouse`:`inventory item`}</p>
                      <Link className='container__content-select' to={route.path === '/warehouse'?`/warehouse/${content.id}`:`/inventory/${content.id}`}>
                        <p className='container__content-select-text --link'>
                          {route.path === '/warehouse'?content.name:content.itemName}
                        </p>
                        <img className='container__content-chevron' src={chevronIcon} alt='select icon'/>
                      </Link>
                    </div>
                    <div className='container__content'>
                      <p className='container__content-title'>{route.path === '/warehouse'?`address`:`category`}</p>
                      <p className='container__content-text'>{route.path === '/warehouse'?`${content.address}, ${content.city}, ${content.country}`:content.category}</p>
                    </div>
                  </div>
                  <div className='container__contact'>
                    <div className={`container__content${route.path === "/warehouse/:id"?" --pull":""}`}>
                      <p className='container__content-title'>{route.path === '/warehouse'?`contact name`:`status`}</p>
                      <p className={`container__content-text${route.path === '/warehouse/:id' && `${content.quantity === 0?" --out-of-stock":" --in-stock"}`}`}>
                        {route.path === '/warehouse'?content.contact.name:content.status}
                      </p>
                    </div>
                    <div className={`container__content${route.path === "/warehouse/:id"?" --shift":""}`}>
                      <p className='container__content-title'>{route.path === '/warehouse'?`contact information`:`qty`}</p>
                      {route.path === '/warehouse' &&
                        <p className='container__content-text'>
                          {content.contact.phone}
                        </p>}
                      <p className='container__content-text'>
                        {route.path === '/warehouse'? content.contact.email:content.quantity}
                      </p>
                    </div>
                  </div>
                  <div className='container__links'>
                      <img src={deleteIcon} alt='delete icon' />
                      <img src={editIcon} alt='edit icon' />
                  </div>
                </div>
            ))}
        </div>
    )
}

export default ListItems
