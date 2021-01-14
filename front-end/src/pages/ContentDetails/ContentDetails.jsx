import React, { Component } from 'react';
import axios from 'axios';
import returnIcon from '../../assets/icons/arrow_back-24px.svg';
import editOffsetIcon from '../../assets/icons/edit-offset-24px.svg';
import './ContentDetails.scss';

export class ContentDetails extends Component {
  state={
    currentInventoryItem: [],
  }

componentDidMount() {
  let itemID = this.props.match.params.id
  axios
  .get(`${process.env.REACT_APP_API_URL}/inventory/${itemID}`)
  .then((response) => {
    console.log(response.data);
    this.setState({
      currentInventoryItem: response.data
    })
  })
}

  render() {
    return (
      <div className="content">
        <div className="content__heading">
          <div className="content__heading-nav">
            <img src={returnIcon} alt="back arrow" className="content__heading-nav-return"/>
            <h1 className="content__heading-nav-title">{this.state.currentInventoryItem.itemName}</h1>
          </div>
          <div className="content__heading-edit">
            <img src={editOffsetIcon} alt="edit icon" className="content__heading-edit-icon"/>
            <p className="content__heading-edit-text">Edit</p>
          </div>
        </div>
        <div className="content__detail">
          <div className="content__detail-type">
            <h4 className="content__detail-type-descrheading">ITEM DESCRIPTION:</h4>
            <p className="content__detail-type-descrvalue">{this.state.currentInventoryItem.description}</p>
            <h4 className="content__detail-type-catheading">CATEGORY:</h4>
            <p className="content__detail-type-catvalue">{this.state.currentInventoryItem.category}</p>
          </div>
          <div className="content__detail-specs">
            <div className="content__detail-specs-stock">
              <div className="content__detail-specs-stock-status">
                <h4 className="content__detail-specs-stock-status-heading">STATUS:</h4>
                <div className={`content__detail-specs-stock-status-value${this.state.currentInventoryItem.quantity === 0?" --out-of-stock":""}`}>{this.state.currentInventoryItem.status}</div>
              </div>
              <div className="content__detail-specs-stock-quantity">
                <h4 className="content__detail-specs-stock-quantity-heading">QUANTITY:</h4>
                <p className="content__detail-specs-stock-quantity-value">{this.state.currentInventoryItem.quantity}</p>
              </div>
            </div>
            <div className="content__detail-specs-warehouse">
              <h4 className="content__detail-specs-warehouse-heading">WAREHOUSE:</h4>
              <p className="content__detail-specs-warehouse-value">{this.state.currentInventoryItem.warehouseName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentDetails
