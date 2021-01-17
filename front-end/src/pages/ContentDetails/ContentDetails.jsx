import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ListItems from '../../components/ListItems/ListItems';
import NavBar from '../../components/NavBar/NavBar';
import returnIcon from '../../assets/icons/arrow_back-24px.svg';
import editOffsetIcon from '../../assets/icons/edit-offset-24px.svg';
import './ContentDetails.scss';

export class ContentDetails extends Component {
  state={
    currentItem: [],
    contact: [],
    inventoryList: [],
    currentRoute: this.props.match.path
  }

  
  componentDidMount() {
    let itemID = this.props.match.url
    axios
    .get(`${process.env.REACT_APP_API_URL}${itemID}`)
    .then((response) => {
      console.log(response);
      this.setState({
        currentItem: response.data,
        contact: response.data.contact
      })
    })
    .then(
      this.state.currentRoute === '/warehouse/:id' &&
      axios
      .get(`${process.env.REACT_APP_API_URL}${itemID}/inventory`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          inventoryList: response.data,
        })
      }) 
    )
  }

  componentDidUpdate(prevProps){
    let itemID = this.props.match.url
    console.log(prevProps);
    console.log(this.props);
    axios
    .get(`${process.env.REACT_APP_API_URL}${itemID}`)
    .then((response) => {
      console.log(response);
      this.setState({
        currentItem: response.data,
        contact: response.data.contact,
        currentRoute: this.props.match.path
      })
    })
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className="content">
        <div className="content__heading">
          <div className="content__heading-nav">
            <img src={returnIcon} alt="back arrow" className="content__heading-nav-return" onClick={()=> {this.props.history.push(`${this.state.currentRoute === '/inventory/:id'?"/inventory":"/warehouse"}`)}}/>
            <h1 className="content__heading-nav-title">{this.state.currentRoute === '/inventory/:id'?this.state.currentItem.itemName:this.state.currentItem.name}</h1>
          </div>
          <Link to={`${this.props.match.url}/edit`} className="content__heading-edit">
            <img src={editOffsetIcon} alt="edit icon" className="content__heading-edit-icon"/>
            <p className="content__heading-edit-text">Edit</p>
          </Link>
        </div>
        <div className="content__detail">
        {this.state.currentRoute === '/inventory/:id' ?
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
          {this.state.currentRoute === '/inventory/:id' ?
           <div className={"content__detail-specs"}>
            <div className="content__detail-specs-container">
              <div className="content__detail-specs-container-status">
                <h4 className="content__detail-specs-container-status-heading">STATUS:</h4>
                <div className={`content__detail-specs-container-status-value${this.state.currentItem.quantity === 0&&" --out-of-stock"}`}>{this.state.currentItem.status}</div>
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
        {this.state.currentRoute !== '/inventory/:id' && <NavBar/>}
        {this.state.currentRoute !== '/inventory/:id' && <ListItems listData={this.state.inventoryList}/>}
      </div>
    )
  }
}

export default ContentDetails
