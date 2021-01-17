import React, { Component } from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import ListItems from "../../components/ListItems/ListItems";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";
import PageLoading from "../../components/pageLoading/PageLoading";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

export class Home extends Component {
  state = {
    itemList: [],
    loaded: false,
  };
  async componentDidMount() {
    await axios
      .get(`${process.env.REACT_APP_API_URL}${this.props.match.path}/`)
      .then((res) => {
        this.setState({ itemList: res.data, loaded: true });
      })
      .then(
        axios.get(`${process.env.REACT_APP_API_URL}/inventory`).then((res) => {
          this.setState({
            inventory: res.data,
          });
        })
      );
  }
  async componentDidUpdate(prevProps) {
    prevProps !== this.props &&
      (await axios
        .get(`${process.env.REACT_APP_API_URL}${this.props.match.path}/`)
        .then((res) => {
          this.setState({ itemList: res.data, loaded: true });
        })
        .catch((error) => {
          console.log(error);
        }));
  }

  render() {
    let warehouse = this.props.match.path === "/warehouse";
    console.log(this.props);
    if (!this.state.loaded) {
      return <PageLoading />;
    } else {
      return (
        <div className="home">
          <div className="home__header">
            {warehouse ? <h1 className="home__title">Warehouse</h1> : <h1 className="home__title-inventory">Inventory</h1>}
            <div className="home__form">
              <form action="" id="form">
                <input type="text" placeholder="Search..." className="home__input" />
                <img src={searchIcon} alt="search icon" id="searchIcon" />
                {warehouse ? <button className="home__btn">+ Add New Warehouse </button> : <button className="home__btn-inventory">+ Add New Item </button>}
              </form>
            </div>
          </div>
          <NavBar path={warehouse}></NavBar>
          {warehouse
            ? this.state.itemList.map((content) => (
                <div className="home__card" key={content.id}>
                  <div className="home__location">
                    <div className="home__content">
                      <p className="home__content-title">warehouse</p>
                      <Link to={`warehouse/${content.id}`} className="home__select">
                        <p className="home__content-text--link">{content.name}</p>
                        <img src={chevronIcon} alt="select icon" />
                      </Link>
                    </div>
                    <div className="home__content">
                      <p className="home__content-title">address</p>
                      <p className="home__content-text">{content.address},</p>
                      <p className="home__content-text">
                        {content.city},{content.country}
                      </p>
                    </div>
                  </div>
                  <div className="home__contact">
                    <div className="home__content">
                      <p className="home__content-title">contact name</p>
                      <p className="home__content-text">{content.contact.name}</p>
                    </div>
                    <div className="home__content">
                      <p className="home__content-title">contact information</p>
                      <p className="home__content-text"> {content.contact.phone}</p>
                      <p className="home__content-text"> {content.contact.email}</p>
                    </div>
                  </div>
                  <div className="home__links">
                    <Link>
                      <img src={deleteIcon} alt="delete icon" />
                    </Link>
                    <Link>
                      {" "}
                      <img src={editIcon} alt="edit icon" />
                    </Link>
                  </div>
                </div>
              ))
            : this.state.inventory.map((content) => (
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
                    <Link>
                      <img src={deleteIcon} alt="delete icon" />
                    </Link>
                    <Link>
                      {" "}
                      <img src={editIcon} alt="edit icon" />
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      );
    }
  }
}

export default Home;
