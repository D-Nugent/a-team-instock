import React, { Component } from "react";
import axios from "axios";
import Back from "../../assets/icons/arrow_back-24px.svg";
import "./ModifyInventory.scss";

export class ModifyInventory extends Component {
  state = {
    itemName: "",
    description: "",
    categories: [],
    categorySelected: "",
    status: "IN STOCK",
    quantity: 0,
    warehouses: [],
    warehouseSelected: "",
    validationError: "",
  };

  componentDidMount() {
    let itemId = this.props.match.params.id;

    if (this.props.match.path === "/inventory/:id/edit") {
      axios.get(`${process.env.REACT_APP_API_URL}/inventory/${itemId}`).then((res) => {
        this.setState({
          status: res.data.status === "Out of Stock" ? "OUT OF STOCK" : "IN STOCK",
          warehouseSelected: res.data.warehouseName,
          categorySelected: res.data.category,
          quantity: res.data.quantity,
          itemName: res.data.itemName,
          description: res.data.description,
        });
      });
    }
    axios.get(`${process.env.REACT_APP_API_URL}/inventory/categories`).then((res) => {
      this.setState({
        categories: res.data,
      });
    });
    axios.get(`${process.env.REACT_APP_API_URL}/warehouse/warehouse-list`).then((res) => {
      this.setState({
        warehouses: res.data,
      });
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleItemNameChange = (event) => {
    this.setState({
      itemName: event.target.value,
    });
  };

  handleQuantityChange = (event) => {
    console.log(event.target.value, typeof event.target.value);
    this.setState({
      quantity: event.target.value === "" ? event.target.value : parseInt(event.target.value),
    });
  };

  statusHandler = (event) => {
    this.setState({
      status: event.target.value,
    });
    if (event.target.value === "OUT OF STOCK") {
      this.setState({
        quantity: 0,
      });
    }
  };

  warehouseHandler = (event) => {
    this.setState({
      warehouseSelected: event.target.value,
    });
  };

  categoryHandler = (event) => {
    this.setState({
      categorySelected: event.target.value,
    });
  };

  renderQuantity = (status) => {
    if (status === "IN STOCK") {
      return (
        <div>
          <label className={`modify__form-availability-title${this.state.validationError} modify__form-availability-quantity-title`} htmlFor="quantity">
            Quantity
            <input
              className={`modify__form-availability-input${this.state.validationError}`}
              type="number"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
          </label>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  generateOptions = (options, instructionOption) => {
    const optionsToRender = instructionOption ? ["Please select", ...options] : options;

    return optionsToRender.map((options) => {
      return (
        <option className="modify__form-details-input modify__form-details-category-option" value={options} key={options}>
          {options}
        </option>
      );
    });
  };

  createNewItem = (event) => {
    event.preventDefault();

    const newItem = {
      itemName: this.state.itemName,
      description: this.state.description,
      category: this.state.categorySelected,
      status: parseInt(this.state.quantity) === 0 ? "OUT OF STOCK" : this.state.status,
      quantity: this.state.quantity,
      warehouseName: this.state.warehouseSelected,
    };

    if (
      this.state.itemName !== "" &&
      this.state.description !== "" &&
      this.state.categorySelected !== "Please select" &&
      this.state.quantity !== "" &&
      this.state.warehouseSelected !== "Please select"
    ) {
      this.setState({
        validationError: "",
      });
      console.log(newItem, "Posted");
      axios.post(`${process.env.REACT_APP_API_URL}/inventory/new-item`, newItem).then((res) => {
        this.props.history.push(`/inventory/${res.data.id}`);
      });
    } else {
      this.setState({
        validationError: "-error",
      });
      console.log(newItem, "Unable to Post");
    }
  };

  submitEdit = (event) => {
    event.preventDefault();
    console.log(this.state.quantity, 0);

    const newEdit = {
      itemName: this.state.itemName,
      description: this.state.description,
      category: this.state.categorySelected,
      status: parseInt(this.state.quantity) === 0 ? "OUT OF STOCK" : this.state.status,
      quantity: this.state.quantity,
      warehouseName: this.state.warehouseSelected,
    };

    if (
      this.state.itemName !== "" &&
      this.state.description !== "" &&
      this.state.categorySelected !== "Please select" &&
      this.state.quantity !== "" &&
      this.state.warehouseSelected !== "Please select"
    ) {
      this.setState({
        validationError: "",
      });

      axios.put(`${process.env.REACT_APP_API_URL}/inventory/${this.props.match.params.id}/edit`, newEdit).then((res) => {
        this.props.history.push(`/inventory/${res.data.id}`);
      });
    } else {
      this.setState({
        validationError: "-error",
      });
    }
  };

  render() {
    const { status } = this.state;
    const quantity = this.renderQuantity(this.state.status);
    const validationError = this.state.validationError;

    return (
      <section className="modify">
        <div className="modify__header-container">
          <img className="modify__back-button" src={Back} alt="blue arrow pointing left" />
          <h1 className="modify__header">{this.props.match.path === "/inventory/:id/edit" ? "Edit Inventory Item" : "Add New Inventory Item"}</h1>
        </div>
        <form className="modify__form" onSubmit={this.props.match.path === "/inventory/:id/edit" ? this.submitEdit : this.createNewItem}>
          <div className="modify__form-content-container">
            <div className="modify__form-details">
              <h2 className="modify__form-details-subheader">Item Details</h2>
              <label className={`modify__form-details-title${validationError}`} htmlFor="item">
                Item Name
                <input
                  className={`modify__form-details-input${validationError}`}
                  type="text"
                  id="item"
                  name="item"
                  placeholder="Item Name"
                  value={this.state.itemName}
                  onChange={this.handleItemNameChange}
                />
              </label>
              <label className={`modify__form-details-title${validationError}`} htmlFor="description">
                Description
                <textarea
                  className={`modify__form-details-input${validationError} modify__form-details-description-input`}
                  type="text"
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  placeholder="Please enter a brief item description..."
                />
              </label>
              <label className={`modify__form-details-title${validationError}  modify__form-details-category-title`} htmlFor="category">
                Category
                <select
                  className={`modify__form-details-input${validationError} modify__form-details-category-input`}
                  value={this.state.categorySelected}
                  onChange={this.categoryHandler}
                  id="category"
                  name="category"
                >
                  {this.generateOptions(this.state.categories, this.props.match.path !== "/inventory/:id/edit")}
                </select>
              </label>
            </div>
            <div className="modify__form-availability">
              <h2 className="modify__form-availability-subheader">Item Availability</h2>
              <label className="modify__form-availability-title modify__form-status-title" htmlFor="status" name="status" id="status">
                Status
              </label>
              <div className="modify__form-availability-radio-container">
                <input
                  className="modify__form-availability-stock-input modify__form-availability-instock-input"
                  type="radio"
                  id="instock"
                  name="instock"
                  value="IN STOCK"
                  onChange={this.statusHandler}
                  checked={status === "IN STOCK"}
                />
                <label className="modify__form-availability-instock-radio" htmlFor="instock">
                  In stock
                </label>
                <input
                  className="modify__form-availability-stock-input modify__form-availability-outstock-input"
                  type="radio"
                  id="outstock"
                  name="outstock"
                  value="OUT OF STOCK"
                  onChange={this.statusHandler}
                  checked={status === "OUT OF STOCK"}
                />
                <label className="modify__form-availability-outstock-radio" htmlFor="outstock">
                  Out of stock
                </label>
              </div>
              {quantity}
              <label className={`modify__form-availability-title${validationError} modify__form-availability-warehouse-title`} htmlFor="warehouseName">
                Warehouse
                <select
                  className={`modify__form-availability-input${validationError} modify__form-availability-warehouse-input`}
                  value={this.state.warehouseSelected}
                  onChange={this.warehouseHandler}
                  name="warehouse"
                  id="warehouse"
                >
                  {this.generateOptions(this.state.warehouses, this.props.match.path !== "/inventory/:id/edit")}
                </select>
              </label>
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
