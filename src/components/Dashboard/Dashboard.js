import React, { Component } from "react";
import Product from "../Product/Product";

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Product />
      </div>
    );
  }
}

export default Dashboard;
