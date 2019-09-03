import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ml10" href="#"><img src="images/logo.png"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mr10" id="navbarNav">
          <ul className="navbar-nav width100 space_around">
            <li className="nav-item active">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News + Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header
