import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import returnIcon from '../../assets/icons/arrow_back-24px.svg';
import editOffsetIcon from '../../assets/icons/edit-offset-24px.svg';
import './ContentDetails.scss';

export class ContentDetails extends Component {
  state={
    currentItem: [],
    currentRoute: this.props.routeType,
  }

  
  componentDidMount() {
  let testInvID = '4b6a7565-077e-4595-a317-c53095fd5dad'
  let testWarID = 'ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7'

  console.log(this.state);
  console.log(this.props);
  console.log(this.props.match.path);
  let itemID = this.props.match.url
    axios
    .get(`${process.env.REACT_APP_API_URL}${itemID}`)
    .then((response) => {
      console.log(response.data);
      this.setState({
        currentItem: response.data
      })
    })
}

  render() {
    return (
      <div className="content">
        <div className="content__heading">
          <div className="content__heading-nav">
            <img src={returnIcon} alt="back arrow" className="content__heading-nav-return" onClick={()=> {this.props.history.push(`${this.state.currentRoute === 'inventory'?"/inventory":"/warehouse"}`)}}/>
            <h1 className="content__heading-nav-title">{this.state.currentItem.itemName}King West</h1>
          </div>
          <Link to={`/${this.state.currentRoute}/${this.props.match.params.id}/edit`} className="content__heading-edit">
            <img src={editOffsetIcon} alt="edit icon" className="content__heading-edit-icon"/>
            <p className="content__heading-edit-text">Edit</p>
          </Link>
        </div>
        <div className="content__detail">
        {this.state.currentRoute === 'inventory' ?
         <div className="content__detail-type">
            <h4 className="content__detail-type-heading">ITEM DESCRIPTION:</h4>
            <p className="content__detail-type-value">{this.state.currentItem.description}</p>
            <h4 className="content__detail-type-heading">CATEGORY:</h4>
            <p className="content__detail-type-value">{this.state.currentItem.category}</p>
          </div>
          :
         <div className="content__detail-type --warehouse">
            <h4 className="content__detail-type-heading">WAREHOUSE ADDRESS:</h4>
            <address className="content__detail-type-value">{this.state.currentItem.address}469 King Street West,<br/>Toronto, CAN</address>
          </div>
          }
          {this.state.currentRoute === 'inventory' ?
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
                <div className="content__detail-specs-container-contact-name">{this.state.currentItem.name}Graeme Lyon</div>
                <div className="content__detail-specs-container-contact-position">{this.state.currentItem.position}Warehouse Manager</div>
              </div>
              <div className="content__detail-specs-container-communication">
                <h4 className="content__detail-specs-container-communication-heading">CONTACT INFORMATION:</h4>
                <p className="content__detail-specs-container-communication-phone">{this.state.currentItem.phone}+1 (647)504-0911</p>
                <p className="content__detail-specs-container-communication-email">{this.state.currentItem.email}glyon@instock.com</p>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default ContentDetails
