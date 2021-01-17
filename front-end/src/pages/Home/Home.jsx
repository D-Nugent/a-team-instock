import React, { Component } from "react";
import "./Home.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";


export class Home extends Component {
  state = {
    warehouses: [],
    inventory: [],
    // currentRoute: this.props.routeType,
  };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/warehouse`)
      .then((res) => {
        this.setState({
          warehouses: res.data,
        });
      })
      .then(
        axios.get(`${process.env.REACT_APP_API_URL}/inventory`).then((res) => {
          this.setState({
            inventory: res.data,
          });
        })
      );
  }

  render() {
    let warehouse = this.props.match.path === "/warehouse";
    return (
      <div className='warehouse'>
        <div className='warehouse__header'>
          {warehouse ? (
            <h1 className='warehouse__title'>Warehouse</h1>
          ) : (
            <h1 className='warehouse__title'>Inventory</h1>
          )}
          <div className='warehouse__form'>
            <form action='' id='form'>
              <input
                type='text'
                placeholder='Search...'
                className='warehouse__input'
              />
              <img src={searchIcon} alt='search icon' id='searchIcon' />
              {warehouse ? (
                <button className='warehouse__btn'>+ Add New Warehouse </button>
              ) : (
                <button className='warehouse__btn'>+ Add New Item </button>
              )}
            </form>
          </div>
        </div>
        <NavBar path={warehouse}></NavBar>
        {warehouse
          ? this.state.warehouses.map((content) => (
              <div className='warehouse__card' key={content.id}>
                <div className='warehouse__location'>
                  <div className='warehouse__content'>
                    <p className='warehouse__content-title'>warehouse</p>
                    <Link
                      to={`warehouse/${content.id}`}
                      className='warehouse__select'
                    >
                      <p className='warehouse__content-text--link'>
                        {content.name}
                      </p>
                      <img src={chevronIcon} alt='select icon' />
                    </Link>
                  </div>
                  <div className='warehouse__content'>
                    <p className='warehouse__content-title'>address</p>
                    <p className='warehouse__content-text'>
                      {content.address},
                    </p>
                    <p className='warehouse__content-text'>
                      {content.city},{content.country}
                    </p>
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
                    <p className='warehouse__content-title'>
                      contact information
                    </p>
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
                  <Link>
                    <img src={deleteIcon} alt='delete icon' />
                  </Link>
                  <Link>
                    {" "}
                    <img src={editIcon} alt='edit icon' />
                  </Link>
                </div>
              </div>
            ))
          : this.state.inventory.map((content) => (
              <div className='warehouse__card' key={content.id}>
                <div className='warehouse__location'>
                  <div className='warehouse__content'>
                    <p className='warehouse__content-title'>inventory item</p>
                    <Link
                      to={`inventory/${content.id}`}
                      className='warehouse__select'
                    >
                      <p className='warehouse__content-text--link'>
                        {content.itemName}
                      </p>
                      <img src={chevronIcon} alt='select icon' />
                    </Link>
                  </div>
                  <div className='warehouse__content'>
                    <p className='warehouse__content-title'>category</p>
                    <p className='warehouse__content-text'>
                      {content.category}
                    </p>
                  </div>
                </div>
                <div className='warehouse__contact'>
                  <div className='warehouse__content'>
                    <p className='warehouse__content-title'>status</p>
                    <p className='warehouse__content-text'>{content.status}</p>
                  </div>
                  <div className='warehouse__content'>
                    <p className='warehouse__content-title'>qty</p>
                    <p className='warehouse__content-text'>
                      {content.quantity}
                    </p>
                  </div>
                  <div className='warehouse__content'>
                    <p className='warehouse__content-title'>warehouse</p>
                    <p className='warehouse__content-text'>
                      {" "}
                      {content.warehouseName}
                    </p>
                  </div>
                </div>
                <div className='warehouse__links'>
                  <Link>
                    <img src={deleteIcon} alt='delete icon' />
                  </Link>
                  <Link>
                    {" "}
                    <img src={editIcon} alt='edit icon' />
                  </Link>
                </div>
              </div>
            ))}
      </div>
    );
  }
}

export default Home;
