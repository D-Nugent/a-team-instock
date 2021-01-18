import React, { Component } from "react";
import "./ModifyWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export class ModifyWarehouse extends Component {
  state = {
    address: "",
    city: "",
    country: "",
    warehouseName: "",
    loaded: false,
    contact: {},
  };

  componentDidMount() {
    let warehouseId = this.props.match.params.id;

    if (warehouseId) {
      axios.get(`${process.env.REACT_APP_API_URL}/warehouse/${warehouseId}`).then((res) => {
        this.setState({
          address: res.data.address,
          city: res.data.city,
          country: res.data.country,
          warehouseName: res.data.name,
          contact: res.data.contact,
        });
      });
    }
  }

  handleWarehouseNameChange = (event) => {
    this.setState({
      warehouseName: event.target.value,
    });
  };

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleCountryChange = (event) => {
    this.setState({
      country: event.target.value,
    });
  };

  handleContactNameChange = (event) => {
    this.setState({
      contact: {
        name: event.target.value,
      },
    });
  };

  handlePositionChange = (event) => {
    this.setState({
      contact: {
        position: event.target.value,
      },
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      contact: {
        phone: event.target.value,
      },
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      contact: {
        email: event.target.value,
      },
    });
  };

  cancelHandler = (event) => {
    event.preventDefault();

    this.setState({
      address: "",
      city: "",
      country: "",
      warehouseName: "",
    });
  };

  render() {
    document.title = `InStock - Modify: ${this.state.warehouseName || ""}`;
    return (
      <div className="card">
        <div className="card__header">
          <Link to="/warehouse">
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
              <input className="card__form-section-input" name="name" value={this.state.warehouseName} placeholder="Warehouse Name" onChange={this.handleWarehouseNameChange} />
            </div>
            <div className="card__form-section">
              <label className="card__form-section-label" htmlFor="address">
                Street Address
              </label>
              <input className="card__form-section-input" name="address" value={this.state.address} placeholder="Street Address" onChange={this.handleAddressChange} />
            </div>
            <div className="card__form-section">
              <label className="card__form-section-label" htmlFor="city">
                City
              </label>
              <input className="card__form-section-input" name="city" value={this.state.city} placeholder="City" onChange={this.handleCityChange} />
            </div>
            <div className="card__form-section">
              <label className="card__form-section-label" htmlFor="country">
                Country
              </label>
              <input className="card__form-section-input" name="country" value={this.state.country} placeholder="Country" onChange={this.handleCountryChange} />
            </div>
          </section>
          <section className="card__form-section card__form-section-contact">
            <h2 className="card__form-section-h2">Contact Details</h2>
            <div className="card__form-section">
              <label className="card__form-section-label" htmlFor="contact">
                Contact Name
              </label>
              <input className="card__form-section-input" name="contact" value={this.state.contact.name} placeholder="Contact Name" onChange={this.handleContactNameChange} />
            </div>
            <div className="card__form-section">
              <label className="card__form-section-label" htmlFor="position">
                Position
              </label>
              <input className="card__form-section-input" name="position" value={this.state.contact.position} placeholder="Position" onChange={this.handlePositionChange} />
            </div>
            <div className="card__form-section">
              <label className="card__form-section-label" htmlFor="phone">
                Phone Number
              </label>
              <input className="card__form-section-input" name="phone" value={this.state.contact.phone} placeholder="Phone Number" onChange={this.handlePhoneChange} />
            </div>
            <div className="card__form-section">
              <label className="card__form-section-label" htmlFor="email">
                Email
              </label>
              <input className="card__form-section-input" name="email" value={this.state.contact.email} placeholder="Email" onChange={this.handleEmailChange} />
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
    );
  }
}

export default ModifyWarehouse;
