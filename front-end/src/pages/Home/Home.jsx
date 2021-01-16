import React, { Component } from "react";
import "./Home.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import ListItems from '../../components/ListItems/ListItems';
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
const API = "http://localhost:8080/";

export class Home extends Component {
  state = {
    warehouses: [],
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
            <form className='warehouse__form' action=''>
              <div className="warehouse__form-input">
                <input type='text' placeholder='Search...' className='warehouse__form-input-field'/>
                <img src={searchIcon} alt='search icon' className='warehouse__form-input-field-searchIcon'/>
              </div>
              <button className='warehouse__form-input-btn'>+ Add New Warehouse</button>
            </form>
        </div>
        <NavBar/>
        <ListItems warehouses={this.state.warehouses}/>
      </div>
    );
  }
}

export default Home;
