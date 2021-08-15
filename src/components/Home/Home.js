import React, { Component } from "react";
import "./home.css";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="title">
          WELCOME TO THE UNOFFICIAL WEBSITE OF GCE, TIRUNELVELI
        </h1>
        <img
          src="https://gcetlyalumni.org//public/uploads/slider/DSC_7620_1600x1067.jpg"
          alt="hero"
        />
      </div>
    );
  }
}

export default Home;
