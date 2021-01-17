import React, { Component } from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import ListItems from '../../components/ListItems/ListItems';
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.scss";
import PageLoading from "../../components/pageLoading/PageLoading";

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
      .catch((error) => {
        console.log(error);
      });
  }

  async componentDidUpdate(prevProps){
    prevProps !== this.props &&
    await axios
      .get(`${process.env.REACT_APP_API_URL}${this.props.match.path}/`)
      .then((res) => {
        this.setState({ itemList: res.data, loaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props);
    if (!this.state.loaded) {
      return <PageLoading/>
    } else {
      return (
        <div className='warehouse'>
          <div className='warehouse__header'>
            <h1 className='warehouse__title'>{this.props.match.path === '/warehouse'?'Warehouses':'Inventory'}</h1>
              <form className='warehouse__form' action=''>
                <div className="warehouse__form-input">
                  <input type='text' placeholder='Search...' className='warehouse__form-input-field'/>
                  <img src={searchIcon} alt='search icon' className='warehouse__form-input-field-searchIcon'/>
                </div>
                <button className='warehouse__form-input-btn'>+ Add New Warehouse</button>
              </form>
          </div>
          <NavBar/>
          <ListItems listData={this.state.itemList} loaded={this.state.loaded}/>
        </div>
      );
    }
  }
}

export default Home;
