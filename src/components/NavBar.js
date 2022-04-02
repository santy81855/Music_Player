import './NavBar.css';
import React, { Component, useState } from 'react';
import NavBarIcon from './NavBarIcon.js';

// This works!
// put in other file: "const {idx} = require('./NavBar.js');"
export var idx = 1;

class NavBar extends Component {
  constructor(props) {
    super(props);
    // idx = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    idx = 0;
    console.log('You clicked: ' + idx);
  }

  render() {
    return (
      <div className="NavBar">
        {/* NavBar */}
        {/* <button className='button' onClick={this.handleClick}> */}
          <NavBarIcon selected={idx === 0} />
        {/* </button> */}

        <NavBarIcon selected={idx === 1} />
        <NavBarIcon selected={idx === 2} />
        <NavBarIcon selected={idx === 3} />
        <NavBarIcon selected={idx === 4} />
        {/* NavBar */}

        
      </div>
    );
  }
}

export default NavBar;
