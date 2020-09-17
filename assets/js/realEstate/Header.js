import React, { Component} from 'react';




export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Nico'
    }
  }
  render () {
    return (<header>

      <div className="logo">EState</div>

      <nav>
        <a href="#">Create Ads</a>
        <a href="#">About Us</a>
        <a href="#">Login</a>
        <a href="#" className="register-btn">Register</a>
      </nav>
    </header>)
  }
}
