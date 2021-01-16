import React, { Component } from "react";
import Back from "../../assets/icons/arrow_back-24px.svg";
import "./ContentNew.scss";
// import { Link } from "react-router-dom";
// import FormError from "../../assets/icons/error-24px.svg";

export class ContentNew extends Component {
  render() {
    return (
      <div className="add">
        <div className="add__header-container">
          <img className="add__back-button" src={Back} alt="blue arrow pointing left" />

          <h1 className="add__header">Add New Warehouse</h1>
        </div>
        <form className="add__form">
          <div className="add__form-content-container">
            <div className="add__form-warehouse">
              <h2 className="add__form-warehouse-subheader">Warehouse Details</h2>
              <label className="add__form-warehouse-title add__form-warehouse-name-title" htmlFor="warehouse-name">
                Warehouse Name
              </label>
              <input className="add__form-warehouse-input" type="text" id="warehouse" name="warehouse" placeholder="Warehouse Name" required />
              <label className="add__form-warehouse-title  add__form-warehouse-address-title" htmlFor="address">
                Street Address
              </label>
              <input className="add__form-warehouse-input add__form-warehouse-address-input" type="text" id="address" name="address" placeholder="Street Address" required />
              <label className="add__form-warehouse-title  add__form-warehouse-city-title" htmlFor="city">
                City
              </label>
              <input className="add__form-warehouse-input add__form-warehouse-city-input" type="text" id="city" name="city" placeholder="City" required />
              <label className="add__form-warehouse-title  add__form-warehouse-country-title" htmlFor="country">
                Country
              </label>
              <input className="add__form-warehouse-input add__form-warehouse-country-input" type="text" id="country" name="country" placeholder="Country" required />
            </div>
            <div className="add__form-contact">
              <h2 className="add__form-contact-subheader">Contact Details</h2>
              <label className="add__form-warehouse-title add__form-contact-title" htmlFor="contact">
                Contact Name
              </label>
              <input className="add__form-warehouse-input add__form-contact-name-input" type="text" id="contact" name="contact" placeholder="Contact Name" required />
              <label className="add__form-warehouse-title add__form-contact-position-title" htmlFor="position">
                Position
              </label>
              <input className="add__form-warehouse-input add__form-contact-position-input" type="text" id="position" name="position" placeholder="Position" required />
              <label className="add__form-warehouse-title  add__form-contact-number-title" htmlFor="number">
                Phone Number
              </label>
              <input className="add__form-warehouse-input add__form-contact-number-input" type="text" id="number" name="number" placeholder="Phone Number" required />
              <label className="add__form-warehouse-title add__form-contact-email-title" htmlFor="email">
                Email
              </label>
              <input className="add__form-warehouse-input add__form-contact-email-input" type="text" id="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div className="add__form-button-container">
            <button className="add__form-button-cancel">Cancel</button>
            <button className="add__form-button-add">+ Add Warehouse</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContentNew;
