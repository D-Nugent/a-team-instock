import React, { Component } from 'react';
import returnIcon from '../../assets/icons/arrow_back-24px.svg';
import editOffsetIcon from '../../assets/icons/edit-offset-24px.svg';
import './ContentDetails.scss';

export class ContentDetails extends Component {
  render() {
    return (
      <div className="content">
        <div className="content__heading">
          <div className="content__heading-nav">
            <img src={returnIcon} alt="back arrow" className="content__heading-nav-return"/>
            <h1 className="content__heading-nav-title">Television</h1>
          </div>
          <div className="content__heading-edit">
            <img src={editOffsetIcon} alt="edit icon" className="content__heading-edit-icon"/>
          </div>
        </div>
        <div className="content__detail">
          <div className="content__detail-type">
            <h4 className="content__detail-type-descrheading">ITEM DESCRIPTION:</h4>
            <p className="content__detail-type-descrvalue">This 50", 4K LED TV proides a crystal-clear picture and vivid colors.</p>
            <h4 className="content__detail-type-catheading">CATEGORY:</h4>
            <p className="content__detail-type-catvalue">Electronics</p>
          </div>
          <div className="content__detail-specs">
            <div className="content__detail-specs-stock">
              <div className="content__detail-specs-stock-status">
                <h4 className="content__detail-specs-stock-status-heading">STATUS:</h4>
                <div className="content__detail-specs-stock-status-value">IN STOCK</div>
              </div>
              <div className="content__detail-specs-stock-quantity">
                <h4 className="content__detail-specs-stock-quantity-heading">QUANTITY:</h4>
                <p className="content__detail-specs-stock-quantity-value">500</p>
              </div>
            </div>
            <div className="content__detail-specs-warehouse">
              <h4 className="content__detail-specs-warehouse-heading">WAREHOUSE:</h4>
              <p className="content__detail-specs-warehouse-value">Manhattan</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentDetails
