import React, { Component } from "react";
import "./Home.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
const API = "http://localhost:8080/";

export class Home extends Component {
  state = {
    warehouses: [], // this is the variable for the sidevideo
  };
  componentDidMount() {
    axios
      .get(`${API}warehouse/`)
      .then((res) => {
        this.setState({ warehouses: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className='warehouse'>
        <div className='warehouse__header'>
          <h1 className='warehouse__title'>Warehouses</h1>
          <div className='warehouse__form'>
            <form action='' id='form'>
              <input
                type='text'
                placeholder='Search...'
                className='warehouse__input'
              />
              <img src={searchIcon} alt='search icon' id='searchIcon' />
              <button className='warehouse__btn'>+ Add New Warehouse</button>
            </form>
          </div>
        </div>
        <NavBar></NavBar>
        {this.state.warehouses.map((content, id) => (
          <div className='warehouse__card' key={id}>
            <div className='warehouse__location'>
              <div className='warehouse__content'>
                <p className='warehouse__content-title'>warehouse</p>
                <Link className='warehouse__select'>
                  <p className='warehouse__content-text--link'>
                    {content.name}
                  </p>
                  <img src={chevronIcon} alt='select icon' />
                </Link>
              </div>
              <div className='warehouse__content'>
                <p className='warehouse__content-title'>address</p>
                <p className='warehouse__content-text'>
                  {content.address},{content.city},{content.country}
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
