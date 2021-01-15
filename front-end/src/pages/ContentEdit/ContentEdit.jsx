import React, { Component } from 'react'
import './ContentEdit.scss';
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class ContentEdit extends Component {
    state = {
        warehouseInfo: {},
    }
    
    getWarehouseDetails() {
        let itemID = this.props.match.url
        axios.get(`${process.env.REACT_APP_API_URL}${itemID}`)
            .then((res) => {
                console.log(res)
                this.setState({
                warehouseInfo: res.data,
            })
            })
            .catch((error) => {
            console.log(error)
        })
    }

    updateWarehouse = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const address = form.address.value
        const city = form.address.value
        const country = form.country.value
        const contact = form.contact.value
        const position = form.position.value
        const phone = form.phone.value
        const email = form.email.value

        const updateWarehouse = {
            id: this.state.warehouseInfo.id,
            name: name,
            address: address,
            city: city,
            country: country,
            contact: [
                {
                    name: contact,
                    position: position,
                    phone: phone,
                    email: email
                },
            ],
        }
        axios
            .put(`http://localhost:8080/warehouses/${this.state.warehouseInfo.id}`, updateWarehouse)
            .then((res) => console.log('your response', res))
            .catch((error) => console.log('your error:', error))
    }

    componentDidMount() {
        const { id } = this.props.match.params.id
        this.getWarehouseDetails(id)
    }

    render() {
        const { name, address, city, country, contact } = this.state.warehouseInfo

        return (
            <div className="card">
                <div className="card__header">
                    <Link to='/warehouse-main/:id'>
                        <img className="card__header-image" src={BackArrow} alt="back arrow" />
                    </Link>
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
                                value={name}
                                placeholder="warehouse Name"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="address">
                                <h3 className="card__form-section-h3">Street Address</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                value={address}
                                placeholder="Street Address"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="city">
                                <h3 className="card__form-section-h3">City</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                value={city}
                                placeholder="City"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="country">
                                <h3 className="card__form-section-h3">Country</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                value={country}
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
                                value={contact && contact.name}
                                placeholder="Contact Name"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="position">
                                <h3 className="card__form-section-h3">Position</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                value={contact && contact.position}
                                placeholder="Position"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="phone">
                                <h3 className="card__form-section-h3">Phone Number</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                value={contact && contact.phone}
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="card__form-section">
                            <label className="card__form-section-label" htmlFor="email">
                                <h3 className="card__form-section-h3">Email</h3>
                            </label>
                            <input
                                className="card__form-section-input"
                                value={contact && contact.email}
                                placeholder="Email"
                            />
                        </div>
                    </section>
                    <section className="card__form-section-buttons">
                        <button className="card__form-section-button">Cancel</button>
                        <input
                            onClick={this.updateWarehouse}
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
