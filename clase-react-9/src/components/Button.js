import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  render() {
    return (
      <div>
        <label> Hola!!! </label>
        <button className="Button"> Hola Button de React! </button>
      </div>
    );
  }
}
