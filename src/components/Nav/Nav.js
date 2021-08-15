import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/students">Students</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Nav;
