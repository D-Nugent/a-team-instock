import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import returnIcon from "../../assets/icons/arrow_back-24px.svg";
import editOffsetIcon from "../../assets/icons/edit-offset-24px.svg";
import "./ContentDetails.scss";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import PageLoading from "../../components/PageLoading/PageLoading";

export class ContentDetails extends Component {
  state = {
    currentItem: [],
    itemList: [],
    currentRoute: this.props.match.path,
    ascendingSort: false
  };

  componentDidMount() {
    let itemID = this.props.match.url;
    axios
      .get(`${process.env.REACT_APP_API_URL}${itemID}`)
      .then((response) => {
        this.setState({
          currentItem: response.data,
          currentRoute: this.props.match.path
        });
      })
      .then(
        this.state.currentRoute === "/warehouse/:id" &&
          axios.get(`${process.env.REACT_APP_API_URL}${itemID}/inventory`).then((response) => {
            this.setState({
              itemList: response.data,
            });
          })
      );
  }

  componentDidUpdate(prevProps) {
    let itemID = this.props.match.url;
    prevProps !== this.props &&
    axios
    .get(`${process.env.REACT_APP_API_URL}${itemID}`)
    .then((response) => {
      this.setState({
        currentItem: response.data,
        currentRoute: this.props.match.path,
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    nextProps.location !== this.props.location &&
      this.setState({
        prevPath: this.props.location,
      });
  }

  sortToggle = (sortField) => {
    this.state.ascendingSort === false?
  this.setState({
    itemList: this.state.itemList.sort((a,b) => (a[sortField] > b[sortField])?1:-1),
    ascendingSort: true,
  })
  :
  this.setState({
    itemList: this.state.itemList.sort((a,b) => (a[sortField] < b[sortField])?1:-1),
    ascendingSort: false,
  })
  }

  render() {
    document.title = `InStock - ${this.state.currentItem.city || this.state.currentItem.warehouseName} : ${this.state.currentItem.name || this.state.currentItem.itemName}`;
    return (
      <div className="content">
        <div className="content__heading">
          <div className="content__heading-nav">
            <img
              src={returnIcon}
              alt="back arrow"
              className="content__heading-nav-return"
              onClick={() => {
                this.props.history.push(`${this.state.currentRoute === "/inventory/:id" ? this.state.prevPath.pathname : "/warehouse"}`);
              }}
            />
            <h1 className="content__heading-nav-title">{this.state.currentRoute === "/inventory/:id" ? this.state.currentItem.itemName : this.state.currentItem.name}</h1>
          </div>
          <Link to={`${this.props.match.url}/edit`} className="content__heading-edit">
            <img src={editOffsetIcon} alt="edit icon" className="content__heading-edit-icon" />
            <p className="content__heading-edit-text">Edit</p>
          </Link>
        </div>
        <div className="content__detail">
          {this.state.currentRoute === "/inventory/:id" ?
            <div className="content__detail-type">
              <h4 className="content__detail-type-heading">ITEM DESCRIPTION:</h4>
              <p className="content__detail-type-value">{this.state.currentItem.description}</p>
              <h4 className="content__detail-type-heading">CATEGORY:</h4>
              <p className="content__detail-type-value">{this.state.currentItem.category}</p>
            </div>
          :
            <div className="content__detail-type --warehouse">
              <h4 className="content__detail-type-heading">WAREHOUSE ADDRESS:</h4>
              <address className="content__detail-type-value">
                {this.state.currentItem.address},<br />
                {this.state.currentItem.city}, {this.state.currentItem.country}
              </address>
            </div>
          }
          {this.state.currentRoute === "/inventory/:id" ?
            <div className={"content__detail-specs"}>
              <div className="content__detail-specs-container">
                <div className="content__detail-specs-container-status">
                  <h4 className="content__detail-specs-container-status-heading">STATUS:</h4>
                  <div className={`content__detail-specs-container-status-value${this.state.currentItem.quantity === 0 ? " --out-of-stock" : ""}`}>{this.state.currentItem.status}</div>
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
                  <div className="content__detail-specs-container-contact-name">{this.state.currentItem.contactname}</div>
                  <div className="content__detail-specs-container-contact-position">{this.state.currentItem.contactposition}</div>
                </div>
                <div className="content__detail-specs-container-communication">
                  <h4 className="content__detail-specs-container-communication-heading">CONTACT INFORMATION:</h4>
                  <p className="content__detail-specs-container-communication-phone">{this.state.currentItem.contactphone}</p>
                  <p className="content__detail-specs-container-communication-email">{this.state.currentItem.contactemail}</p>
                </div>
              </div>
            </div>
          }
        </div>
        {this.state.currentRoute !== "/inventory/:id" && <NavBar sortToggle={this.sortToggle}/>}
        {this.state.currentRoute !== "/inventory/:id" && (
          <>
            {this.props.match.path === "/warehouse" && !this.state.itemList[0].name ? (
              <PageLoading />
            ) : (
              this.state.itemList.map((content) => (
                <div className="home__card-inventory" key={content.id}>
                  <div className="home__location-inventory">
                    <div className="home__content">
                      <p className="home__content-title">inventory item</p>
                      <Link to={`inventory/${content.id}`} className="home__select">
                        <p className="home__content-text--link">{content.itemName}</p>
                        <img src={chevronIcon} alt="select icon" />
                      </Link>
                    </div>
                    <div className="home__content">
                      <p className="home__content-title-inventory">category</p>
                      <p className="home__content-text-category">{content.category}</p>
                    </div>
                  </div>
                  <div className="home__contact-inventory">
                    <div className="home__content">
                      <p className="home__content-title">status</p>
                      <p className={`home__content-text--status${content.quantity === 0 ? " --out-of-stock" : ""}`}>{content.status}</p>
                    </div>
                    <div className="home__content">
                      <p className="home__content-title">qty</p>
                      <p className="home__content-text-inventory">{content.quantity}</p>
                    </div>
                    <div className="home__content">
                      <p className="home__content-title-inventory">warehouse</p>
                      <p className="home__content-text-location">{content.warehouseName}</p>
                    </div>
                  </div>
                  <div className="home__links-inventory">
                    <img
                      className="home__links-delete"
                      src={deleteIcon}
                      alt="delete icon"
                      onClick={() => {
                        this.setState({
                          deleteThis: true,
                          deleteTarget: `${content.id}`,
                        });
                      }}
                    />
                    <Link to={`inventory/${content.id}/edit`}>
                      <img className="home__links-edit" src={editIcon} alt="edit icon" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    );
  }
}

export default ContentDetails;
