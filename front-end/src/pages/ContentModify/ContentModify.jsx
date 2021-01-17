import React, { Component } from 'react'
import './ContentModify.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class ContentModify extends Component {
    state = {
        currentWarehouse: [],
    };
    
    componentDidMount() {
    let warehouseId = this.props.match.params.id;
        axios.get(`${process.env.REACT_APP_API_URL}/warehouse/${warehouseId}`).then((res) => {
      this.setState({
        currentWarehouse: res.data,
      });
    });
  }

  handleNameChange = (event) => {
    this.setState({
      currentWarehouse: {
        ...this.state.currentWarehouse,
        name: event.target.value,
      },
    });
  };

  handleAddressChange = (event) => {
    this.setState({
      currentWarehouse: {
        ...this.state.currentWarehouse,
        address: event.target.value,
      },
    });
  };

  handleCityChange = (event) => {
    this.setState({
      currentWarehouse: {
        ...this.state.currentWarehouse,
        city: event.target.value,
      },
    });
  };

  handleCountryChange = (event) => {
      this.setState({
        ...this.state.currentWarehouse,
      country: event.target.value,
    });
  };
    
    handleContactChange = (event) => {
        this.setState({
        ...this.state.currentWarehouse,
      contact: event.target.value,
    });
    };
    
    handlePositionChange = (event) => {
        this.setState({
        ...this.state.currentWarehouse,
      position: event.target.value,
    });
    };
    
    handlePhoneChange = (event) => {
        this.setState({
        ...this.state.currentWarehouse,
      phone: event.target.value,
    });
    };
    
    handleEmailChange = (event) => {
        this.setState({
        ...this.state.currentWarehouse,
      email: event.target.value,
    });
    };

    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <Link to='warehouse'>
                        <img className="card__header-image" src={BackArrow} alt="back arrow" />
                    </Link>
                    <h1 className="card__header-title">{this.props.match.path === "/warehouse/:id/edit" ? "Edit Warehouse" : "Add New Warehouse"}</h1>
                </div>
                <form className="card__form" action="">
                    <section className="card__form-section">
                        <h2 className="card__form-section-h2">Warehouse Details</h2>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="name">
                                Warehouse Name
                            </label>
                            <input
                                className="card__form-section-input"
                                name="name"
                                value={this.state.currentWarehouse.name}
                                placeholder="Warehouse Name"
                                onChange={this.handleNameChange}
                                required
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="address">
                                Street Address
                            </label>
                            <input
                                className="card__form-section-input"
                                name="address"
                                value={this.state.currentWarehouse.address}
                                placeholder="Street Address"
                                onChange={this.handleAddressChange}
                                required
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="city">
                                City
                            </label>
                            <input
                                className="card__form-section-input"
                                name="city"
                                value={this.state.currentWarehouse.city}
                                placeholder="City"
                                onChange={this.handleCityChange}
                                required
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="country">
                                Country
                            </label>
                            <input
                                className="card__form-section-input"
                                name='country'
                                value={this.state.currentWarehouse.country}
                                placeholder="Country"
                                onChange={this.handleCountryChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="card__form-section card__form-section-contact">
                        <h2 className="card__form-section-h2">Contact Details</h2>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="contact">
                                Contact Name
                            </label>
                            <input
                                className="card__form-section-input"
                                name='contact'
                                value={this.state.currentWarehouse.contact && this.state.currentWarehouse.contact.name}
                                placeholder="Contact Name"
                                onChange={this.handleContactChange}
                                required
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="position">
                                Position
                            </label>
                            <input
                                className="card__form-section-input"
                                name='position'
                                value={this.state.currentWarehouse.contact && this.state.currentWarehouse.contact.position}
                                placeholder="Position"
                                onChange={this.handlePositionChange}
                                required
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                className="card__form-section-input"
                                name='phone'
                                value={this.state.currentWarehouse.contact && this.state.currentWarehouse.contact.phone}
                                placeholder="Phone Number"
                                onChange={this.handlePhoneChange}
                                required
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="card__form-section-input"
                                name='email'
                                value={this.state.currentWarehouse.contact && this.state.currentWarehouse.contact.email}
                                placeholder="Email"
                                onChange={this.handleEmailChange}
                                required
                            />
                        </div>
                    </section>
                    <section className="card__form-button-container">
                        <button className="card__form-button-cancel">Cancel</button>
                        <button type="submit" className="card__form-button-blue">
                            {this.props.match.path === "/warehouse/:id/edit" ? "Save" : "+ Add Warehouse"}
                        </button>
                    </section>
                </form>
            </div>
        )
    }
}

export default ContentModify
