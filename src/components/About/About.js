import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="title">ABOUT</h1>
        <h4>
          Government College of Engineering, Tirunelveli, is a state-owned
          Engineering Institute located in the city of Tirunelveli in the state
          of Tamil Nadu. <br /> <br /> Tirunelveli is often referred as the
          'Oxford of south India' Due to the larger number of educational
          institutions present. <br /> <br /> It is affiliated to Anna
          University, Chennai and is a AICTE and DOTE approved educational
          institution in Tamil Nadu.
        </h4>
      </div>
    );
  }
}

export default About;
