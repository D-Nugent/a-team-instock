import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import returnIcon from '../../assets/icons/arrow_back-24px.svg';
import editOffsetIcon from '../../assets/icons/edit-offset-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import './ContentDetails.scss';

export class ContentDetails extends Component {
  state={
    currentItem: [],
    contact: [],
    inventoryList: [],
  }

  
  componentDidMount() {
    let itemID = this.props.match.url
    axios
    .get(`${process.env.REACT_APP_API_URL}${itemID}`)
    .then((response) => {
      this.setState({
        currentItem: response.data,
        contact: response.data.contact
      })
    })
    .then(
      this.props.match.path === '/warehouse/:id' &&
      axios
      .get(`${process.env.REACT_APP_API_URL}${itemID}/inventory`)
      .then((response) => {
        this.setState({
          inventoryList: response.data,
        })
      })
      
    )
}

  render() {
    this.props.match.path === '/warehouse/:id'?console.log("It's a match!"):console.log("Better luck next time");
    return (
      <div className="content">
        <div className="content__heading">
          <div className="content__heading-nav">
            <img src={returnIcon} alt="back arrow" className="content__heading-nav-return" onClick={()=> {this.props.history.push(`${this.props.match.path === '/inventory/:id'?"/inventory":"/warehouse"}`)}}/>
            <h1 className="content__heading-nav-title">{this.props.match.path === '/inventory/:id'?this.state.currentItem.itemName:this.state.currentItem.name}</h1>
          </div>
          <Link to={`${this.props.match.url}/edit`} className="content__heading-edit">
            <img src={editOffsetIcon} alt="edit icon" className="content__heading-edit-icon"/>
            <p className="content__heading-edit-text">Edit</p>
          </Link>
        </div>
        <div className="content__detail">
        {this.props.match.path === '/inventory/:id' ?
         <div className="content__detail-type">
            <h4 className="content__detail-type-heading">ITEM DESCRIPTION:</h4>
            <p className="content__detail-type-value">{this.state.currentItem.description}</p>
            <h4 className="content__detail-type-heading">CATEGORY:</h4>
            <p className="content__detail-type-value">{this.state.currentItem.category}</p>
          </div>
          :
         <div className="content__detail-type --warehouse">
            <h4 className="content__detail-type-heading">WAREHOUSE ADDRESS:</h4>
            <address className="content__detail-type-value">{this.state.currentItem.address},<br/>{this.state.currentItem.city}, {this.state.currentItem.country}</address>
          </div>
          }
          {this.props.match.path === '/inventory/:id' ?
           <div className={"content__detail-specs"}>
            <div className="content__detail-specs-container">
              <div className="content__detail-specs-container-status">
                <h4 className="content__detail-specs-container-status-heading">STATUS:</h4>
                <div className={`content__detail-specs-container-status-value${this.state.currentItem.quantity === 0?" --out-of-stock":""}`}>{this.state.currentItem.status}</div>
              </div>
              <div className="content__detail-specs-container-quantity">
                <h4 className="content__detail-specs-container-quantity-heading">QUANTITY:</h4>
                <p className="content__detail-specs-container-quantity-value">{this.state.currentItem.quantity}</p>
              </div>
            </div>
            <div className="content__detail-specs-warehouse">
              <h4 className="content__detail-specs-warehouse-heading">WAREHOUSE:</h4>
              <p className="content__detail-specs-warehouse-value">{this.state.currentItem.warehouseName}</p>
            </div>
          </div>
          :
           <div className="content__detail-specs --warehouse">
            <div className="content__detail-specs-container">
              <div className="content__detail-specs-container-contact">
                <h4 className="content__detail-specs-container-contact-heading">CONTACT NAME:</h4>
                <div className="content__detail-specs-container-contact-name">{this.state.contact.name}</div>
                <div className="content__detail-specs-container-contact-position">{this.state.contact.position}</div>
              </div>
              <div className="content__detail-specs-container-communication">
                <h4 className="content__detail-specs-container-communication-heading">CONTACT INFORMATION:</h4>
                <p className="content__detail-specs-container-communication-phone">{this.state.contact.phone}</p>
                <p className="content__detail-specs-container-communication-email">{this.state.contact.email}</p>
              </div>
            </div>
          </div>
          }
        </div>
        {/* Below is just to test code */}
        <div className="content__inventory">
          {this.state.inventoryList.map(invItem => {
            return (
            <div className="content__inventory-item" key={invItem.id}>
              <Link to={`/inventory/${invItem.id}/`} className="content__inventory-item-name">{invItem.itemName}
              <img src={chevronRight} alt="action arrow" className="content__inventory-item-name-chevron"/>
              </Link>
              <p className="content__inventory-item-category">{invItem.category}</p>
              <div className="content__inventory-item-status">{invItem.status}</div>
              <p className="content__inventory-item-quantity">{invItem.quantity}</p>
              <div className="content__inventory-item-actions">
                <img src={deleteIcon} alt="delete icon" className="content__inventory-item-actions-delete"/>
                <img src={editIcon} alt="edit icon" className="content__inventory-item-actions-edit"/>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ContentDetails
