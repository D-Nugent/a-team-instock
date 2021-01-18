import React, { Component } from "react";
import axios from "axios";
import "./DeleteModal.scss";
import Close from "../../assets/icons/close-24px.svg";

function DeleteModal() {
  return (
    <section className="delete">
      <div className="delete-modal">
        <div className="delete__close-button-container">
          <img className="delete__close-button" src={Close} alt="letter x to signify close button" />
        </div>
        <div className="delete__content-container">
          <h1 className="delete__header">Delete Television inventory item?</h1>
          <p className="delete__body">Please confirm that you'd like to delete Television from the inventory list. You won't be able to undo this action.</p>
        </div>
        <div className="delete__button-container">
          <button className="delete__button-cancel">Cancel</button>
          <button className="delete__button-delete">Delete</button>
        </div>
      </div>
    </section>
  );
}
export default DeleteModal;
