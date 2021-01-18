import React, { Component } from "react";
import axios from "axios";
import "./DeleteModal.scss";
import Close from "../../assets/icons/close-24px.svg";
export class DeleteModal extends Component {
  state = {
    route: this.props.routeProps.match.path,
    deleteTarget: this.props.deleteTarget,
  };
  componentDidMount() {
    this.state.route.path === "/warehouse/:id"
      ? axios.get(`${process.env.REACT_APP_API_URL}/inventory/${this.state.deleteTarget}`)
      : axios.get(`${process.env.REACT_APP_API_URL}${this.state.route.path}/${this.state.deleteTarget}`);
  }
  deleteHandler = () => {
    this.state.route === "/warehouse/:id"
      ? axios.delete(`${process.env.REACT_APP_API_URL}/inventory/${this.state.deleteTarget}`)
      : axios.delete(`${process.env.REACT_APP_API_URL}${this.state.route}/${this.state.deleteTarget}`);
  };
  render() {
    console.log(this.state);
    return (
      <section className="delete">
        <div className="delete-modal">
          <div className="delete__close-button-container">
            <img className="delete__close-button" src={Close} alt="letter x to signify close button" />
          </div>
          {this.state.route === "/inventory" ? (
            <div className="delete__content-container">
              <h1 className="delete__header">Delete inventory item?</h1>
              <p className="delete__body">Please confirm that you'd like to delete Television from the inventory list. You won't be able to undo this action.</p>
            </div>
          ) : (
            <div className="delete__content-container">
              <h1 className="delete__header">Delete King West warehouse?</h1>
              <p className="delete__body">Please confirm that you'd like to delete King West from the list of warehouses. You won't be able to undo this action.</p>
            </div>
          )}
          <div className="delete__button-container">
            <button className="delete__button-cancel">Cancel</button>
            <button className="delete__button-delete" onSubmit={() => this.deleteHandler()}>
              Delete
            </button>
          </div>
        </div>
      </section>
    );
  }
}
<<<<<<< HEAD
export default DeleteModal;
=======
export default DeleteModal;
>>>>>>> master
