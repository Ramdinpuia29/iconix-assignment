import React, { Component } from "react";
import "./contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="title">CONTACT US</h1>
        <h3>principal@gcetly.ac.in</h3>
        <h3>Official Website: </h3>
        <a href="http://gcetly.ac.in/">www.gcetly.ac.in</a>
        <h4>
          <br />
          Government College of Engineering, <br /> Tirunelveli, <br /> Tamil
          Nadu 627007, India <br /> <br />
        </h4>
        <h4>
          0462-2552450 <br /> 0462-2552448
        </h4>
      </div>
    );
  }
}

export default Contact;
