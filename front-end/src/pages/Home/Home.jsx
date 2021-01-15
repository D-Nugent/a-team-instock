import React, { Component } from "react";
import "./Home.scss";
import ContentNew from "../ContentNew/ContentNew";

export class Home extends Component {
  render() {
    return (
      <div className="warehouse">
        <ContentNew />
        {/* <div className='warehouse__div'>
          <p className='warehouse__date'>warehouse</p>
          <p className='warehouse__date-text'>manhattan </p>
        </div>
        <div className='warehouse__div'>
          <p className='warehouse__venue'>contact name</p>
          <p className='warehouse__venue-text'>Parmin Aujila</p>
        </div>
        <div className='warehouse__div'>
          <p className='warehouse__location'>address</p>
          <p className='warehouse__location-text'>503 brodway,new york,USA</p>
        </div>
        <div className='warehouse__div'>
          <p className='warehouse__location'>contact information</p>
          <p className='warehouse__location-text'>+1 (629) 555-0129
          pauila@instock.com</p>
        </div> */}
      </div>
    );
  }
}

export default Home;
