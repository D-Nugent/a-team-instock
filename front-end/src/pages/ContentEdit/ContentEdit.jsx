import React, { Component } from 'react'
import './ContentEdit.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';

export class ContentEdit extends Component {
    render() {
        return (
            <div className="card">
                <div className="card__header">
                    <img className="card__header-image" src={BackArrow} alt="back arrow" />
                    <h1 className="card__header-title">Edit Warehouse</h1>
                </div>
                <form className="card__form" action="">
                    <section className="card__form-section">
                        <h2 className="card__form-section-h2">Warehouse Details</h2>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="name">
                                <h3 className="card__form-section-h3">Warehouse Name</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="name"
                                placeholder="warehouse Name"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="address">
                                <h3 className="card__form-section-h3">Street Address</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="address"
                                placeholder="Street Address"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="city">
                                <h3 className="card__form-section-h3">City</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="city"
                                placeholder="City"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="country">
                                <h3 className="card__form-section-h3">Country</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="country"
                                placeholder="Country"
                            />
                        </div>
                    </section>
                    <section className="card__form-section card__form-section-contact">
                        <h2 className="card__form-section-h2">Contact Details</h2>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="contact">
                                <h3 className="card__form-section-h3">Contact Name</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="contact"
                                placeholder="Contact Name"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="position">
                                <h3 className="card__form-section-h3">Position</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="position"
                                placeholder="Position"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="phone">
                                <h3 className="card__form-section-h3">Phone Number</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="phone"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="email">
                                <h3 className="card__form-section-h3">Email</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                Name="email"
                                placeholder="Email"
                            />
                        </div>
                    </section>
                    <section className="card__form-section-buttons">
                        <button className="card__form-section-button">Cancel</button>
                        <input
                            type="submit"
                            className="card__form-section-button card__form-section-button-blue"
                            value="Save"
                        />
                    </section>
                </form>
            </div>
        )
    }
}

export default ContentEdit
