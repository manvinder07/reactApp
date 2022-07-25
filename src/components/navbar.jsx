import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 h1">
            Items Selected <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
