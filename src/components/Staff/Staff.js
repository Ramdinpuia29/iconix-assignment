import React, { Component } from "react";
import "./staff.css";

export class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newRegNo: "",
      list: [],
    };
  }

  addItem() {
    const newName = {
      id: 1 + Math.random(),
      value: this.state.newName.slice(),
      regNo: this.state.newRegNo.slice(),
    };

    const list = [...this.state.list];
    list.push(newName);

    this.setState({
      list,
      newName: "",
      newRegNo: "",
    });
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div class="staff">
        <h1 className="title">STAFF LIST</h1>
        <div className="container">
          <div className="form-container">
            <div>
              <input
                className="text-input"
                type="text"
                placeholder="Enter Staff Name"
                value={this.state.newName}
                onChange={(e) => this.updateInput("newName", e.target.value)}
              />
              <input
                className="text-input"
                type="text"
                placeholder="Enter Staff ID"
                value={this.state.newRegNo}
                onChange={(e) => this.updateInput("newRegNo", e.target.value)}
              />
            </div>
            <button
              className="add-btn"
              onClick={() => this.addItem()}
              disabled={!this.state.newName.length}
            >
              + ADD
            </button>
          </div>
          <ul>
            {this.state.list.map((item) => (
              <li key={item.id}>
                {item.value}
                <span>{item.regNo}</span>
                <button
                  className="btn"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Staff;
