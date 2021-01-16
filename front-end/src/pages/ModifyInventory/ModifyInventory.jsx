import React, { Component } from "react";
import axios from "axios";
import Back from "../../assets/icons/arrow_back-24px.svg";
import "./ModifyInventory.scss";

export class ModifyInventory extends Component {
  state = {
    currentItem: {},
    radioValue: "",
    categories: [],
  };

  componentDidMount() {
    let itemId = this.props.match.params.id;
    axios.get(`${process.env.REACT_APP_API_URL}/inventory/${itemId}`).then((res) => {
      this.setState({
        currentItem: res.data,
        radioValue: res.data.status === "Out of Stock" ? "outstock" : "instock",
      });
    });
    axios.get(`${process.env.REACT_APP_API_URL}/inventory/categories`).then((res) => {
      this.setState({
        categories: res.data.categories,
      });
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        description: event.target.value,
      },
    });
  };

  handleItemNameChange = (event) => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        itemName: event.target.value,
      },
    });
  };

  handleQuantityChange = (event) => {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        quantity: event.target.value,
      },
    });
  };

  radioButtonHandler = (event) => {
    this.setState({
      radioValue: event.target.value,
    });
  };

  renderQuantity = (status) => {
    if (status === "instock") {
      return (
        <div>
          <label className="modify__form-availability-title modify__form-availability-quantity-title" htmlFor="quantity">
            Quantity
          </label>
          <input className="modify__form-availability-input" type="text" id="quantity" name="quantity" value={this.state.currentItem.quantity} onChange={this.handleQuantityChange} required />
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  // submitEdit = (event) => {
  //   const { match } = this.props;

  //   newEdit = {
  //     item: this.state.currentItem.item,
  //     description: this.state.currentItem.description,
  //     category: this.state.currentItem.category,
  //     status: this.state.currentItem.status,
  //     quantity: this.state.currentItem.quantity,
  //     warehouse: this.state.currentItem.description,
  //   };

  //   axios.put(`${process.env.REACT_APP_API_URL}${itemId}/edit`, newEdit).then((res) => {
  //     this.setState({
  //       currentItem: {
  //         item: res.data.item,
  //         description: res.data.description,
  //         category: res.data.category,
  //         status: res.data.status,
  //         quantity: res.data.quantity,
  //         warehouse: res.data.warehouse,
  //       },
  //     });
  //   });
  // };

  render() {
    const { radioValue } = this.state;
    const quantity = this.renderQuantity(this.state.radioValue);

    return (
      <section className="modify">
        <div className="modify__header-container">
          <img className="modify__back-button" src={Back} alt="blue arrow pointing left" />
          <h1 className="modify__header">{this.props.match.path === "/inventory/:id/edit" ? "Edit Inventory Item" : "Add New Inventory Item"}</h1>
        </div>
        <form className="modify__form">
          <div className="modify__form-content-container">
            <div className="modify__form-details">
              <h2 className="modify__form-details-subheader">Item Details</h2>
              <label className="modify__form-details-title modify__form-details-name-title" htmlFor="item">
                Item Name
              </label>
              <input
                className="modify__form-details-input"
                type="text"
                id="item"
                name="item"
                placeholder="Item Name"
                value={this.state.currentItem.itemName}
                onChange={this.handleItemNameChange}
                required
              />
              <label className="modify__form-details-title  modify__form-details-description-title" htmlFor="description">
                Description
              </label>
              <textarea
                className="modify__form-details-input modify__form-details-description-input"
                type="text"
                id="description"
                name="description"
                required
                value={this.state.currentItem.description}
                onChange={this.handleDescriptionChange}
              />
              <label className="modify__form-details-title  modify__form-details-category-title" htmlFor="category">
                Category
              </label>
              <select className="modify__form-details-input modify__form-details-category-input" placeholder="Please select" value={this.state.currentItem.category}>
                {this.state.categories.map((category) => {
                  return (
                    <option className="modify__form-details-input modify__form-details-category-option" value={category} key={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="modify__form-availability">
              <h2 className="modify__form-availability-subheader">Item Availability</h2>
              <label className="modify__form-availability-title modify__form-status-title" htmlFor="status">
                Status
              </label>
              <div className="modify__form-availability-radio-container">
                <input
                  className="modify__form-availability-stock-input modify__form-availability-instock-input"
                  type="radio"
                  id="instock"
                  name="instock"
                  value="instock"
                  onChange={this.radioButtonHandler}
                  checked={radioValue === "instock"}
                />
                <label className="modify__form-availability-instock-radio" htmlFor="instock">
                  In stock
                </label>
                <input
                  className="modify__form-availability-stock-input modify__form-availability-outstock-input"
                  type="radio"
                  id="outstock"
                  name="outstock"
                  value="outstock"
                  onChange={this.radioButtonHandler}
                  checked={radioValue === "outstock"}
                />
                <label className="modify__form-availability-outstock-radio" htmlFor="outstock">
                  Out of stock
                </label>
              </div>
              {quantity}
              <label className="modify__form-availability-title modify__form-availability-warehouse-title" htmlFor="warehouse">
                Warehouse
              </label>
              <select className="modify__form-availability-input modify__form-availability-warehouse-input">
                <option className="modify__form-availability-input modify__form-availability-warehouse-option">{this.state.currentItem.warehouseName}</option>
              </select>
            </div>
          </div>
          <div className="modify__form-button-container">
            <button className="modify__form-button-cancel">Cancel</button>
            <button className="modify__form-button-save">{this.props.match.path === "/inventory/:id/edit" ? "Save" : "+ Add Item"}</button>
          </div>
        </form>
      </section>
    );
  }
}

export default ModifyInventory;
