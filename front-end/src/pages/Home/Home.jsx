import React, { Component } from "react";
import "./Home.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import chevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";
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
        <div>
          <h1 className='warehouse__title'>Warehouses</h1>
        </div>
        <div className='warehouse__form'>
          <form action='' id="form">
            <input
              type='text'
              placeholder='Search...'
              className='warehouse__input'
        
            />
            <img src={searchIcon} alt='search icon' id='searchIcon' />
            <button className='warehouse__btn'>+ Add New Warehouses</button>
          </form>
        </div>
        {this.state.warehouses.map((content) => (
          <div className='warehouse__card'>
            <div className='warehouse__div'>
              <p className='warehouse__div-title'>warehouse</p>
              <p className='warehouse__div-text'>{content.name}</p>
              <img src={chevronIcon} alt='select icon' />
            </div>
            <div className='warehouse__div'>
              <p className='warehouse__div-title'>contact name</p>
              <p className='warehouse__div-text'>{content.contact.name}</p>
            </div>
            <div className='warehouse__div'>
              <p className='warehouse__div-title'>address</p>
              <p className='warehouse__div-text'>
                {content.address}
                {content.city},
                {content.country}
              </p>
            </div>
            <div className='warehouse__div'>
              <p className='warehouse__div-title'>contact information</p>
              <p className='warehouse__div-text'>
                {content.contact.phone}
                {content.contact.email}
              </p>
            </div>
            <div>
              <img src={deleteIcon} alt='delete icon' />
              <img src={editIcon} alt='edit icon' />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
