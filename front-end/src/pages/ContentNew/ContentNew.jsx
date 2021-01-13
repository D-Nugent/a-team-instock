import React, { Component } from "react";
import Back from "../../assets/icons/arrow_back-24px.svg";

export class ContentNew extends Component {
  render() {
    return (
      <div>
        <header className="add">
          <img className="add__back-button" src={Back} alt="blue arrow pointing left" />
          <h1 className="add__header">Add New Warehouse</h1>
        </header>
        <form className="add__form">
          <div className="add__form-warehouse">
            <h2 className="add__form-warehouse-subheader">Warehouse Details</h2>
            <label className="add__form-warehouse-name-title" htmlFor="warehouse-name">
              Warehouse Name
            </label>
            <textarea className="add__form-warehouse-name-input" type="text" id="warehouse-name" name="warehouse-name" placeholder="Warehouse Name" required />
            <label className="add__form-warehouse-address-title" htmlFor="warehouse-address">
              Street Address
            </label>
            <textarea className="add__form-warehouse-address-input" type="text" id="warehouse-address" name="warehouse-address" placeholder="Street Address" required />
            <label className="add__form-warehouse-city-title" htmlFor="warehouse-city">
              City
            </label>
            <textarea className="add__form-warehouse-city-input" type="text" id="warehouse-city" name="warehouse-city" placeholder="City" required />
            <label className="add__form-warehouse-country-title" htmlFor="warehouse-country">
              Country
            </label>
            <textarea className="add__form-warehouse-country-input" type="text" id="warehouse-country" name="warehouse-country" placeholder="Country" required />
          </div>
          <div className="add__form-contact">
            <label className="add__form-contact-name-title" htmlFor="contact-name">
              Contact Name
            </label>
            <textarea className="add__form-contact-name-input" type="text" id="contact-name" name="contact-name" placeholder="Contact Name" required />
            <label className="add__form-contact-position-title" htmlFor="contact-position">
              Position
            </label>
            <textarea className="add__form-contact-position-input" type="text" id="contact-position" name="contact-position" placeholder="Position" required />
            <label className="add__form-contact-number-title" htmlFor="contact-number">
              Phone Number
            </label>
            <textarea className="add__form-contact-number-input" type="text" id="contact-number" name="contact-number" placeholder="Phone Number" required />
            <label className="add__form-contact-email-title" htmlFor="contact-email">
              Email
            </label>
            <textarea className="add__form-contact-email-input" type="text" id="contact-email" name="contact-email" placeholder="Email" required />
          </div>
          <div className="add__form-button-container">
            <button className="add__form-button-cancel">Cancel</button>
            <button className="add__form-button-add">Add Warehouse</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContentNew;
