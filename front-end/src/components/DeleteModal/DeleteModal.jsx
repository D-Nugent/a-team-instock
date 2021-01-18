import React, { Component } from "react";
import axios from "axios";
import "./DeleteModal.scss";
import Close from "../../assets/icons/close-24px.svg";
export class DeleteModal extends Component {
  state = {
    route: this.props.routeProps.match.path,
    deleteTarget: this.props.deleteTarget,
    gatheredData: {},
    deleteThis: true,
  };

  componentDidMount() {
    console.log("test");

    this.state.route === "/warehouse/:id"
      ? axios.get(`${process.env.REACT_APP_API_URL}/inventory/${this.state.deleteTarget}`).then((res) => {
          this.setState({
            gatheredData: res.data,
          });
          console.log(res.data);
        })
      : axios.get(`${process.env.REACT_APP_API_URL}${this.state.route}/${this.state.deleteTarget}`).then((res) => {
          this.setState({
            gatheredData: res.data,
          });
          console.log(res.data);
        });
  }

  deleteHandler = () => {
    this.state.route === "/warehouse/:id"
      ? axios.delete(`${process.env.REACT_APP_API_URL}/inventory/${this.state.deleteTarget}`).then((res) => {
          this.props.closeHandler();
          this.props.deleteHandler();
        })
      : axios.delete(`${process.env.REACT_APP_API_URL}${this.state.route}/${this.state.deleteTarget}`).then((res) => {
          this.props.closeHandler();
          this.props.deleteHandler();
        });
  };
  render() {
    console.log(this.state);
    return (
      <section className="delete">
        <div className="delete-modal">
          <div className="delete__close-button-container">
            <img className="delete__close-button" src={Close} onClick={this.props.closeHandler} alt="letter x to signify close button" />
          </div>
          {this.state.route === "/inventory" ? (
            <div className="delete__content-container">
              <h1 className="delete__header">Delete {this.state.gatheredData.itemName} inventory item?</h1>
              <p className="delete__body">Please confirm that you'd like to delete {this.state.gatheredData.itemName} from the inventory list. You won't be able to undo this action.</p>
            </div>
          ) : (
            <div className="delete__content-container">
              <h1 className="delete__header">Delete {this.state.gatheredData.name} warehouse?</h1>
              <p className="delete__body">Please confirm that you'd like to delete {this.state.gatheredData.name} from the list of warehouses. You won't be able to undo this action.</p>
            </div>
          )}
          <div className="delete__button-container">
            <button className="delete__button-cancel" onClick={this.props.closeHandler}>
              Cancel
            </button>
            <button className="delete__button-delete" onClick={() => this.deleteHandler()}>
              Delete
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default DeleteModal;

