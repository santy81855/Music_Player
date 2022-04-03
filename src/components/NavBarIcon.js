import React, { Component} from 'react';
import './NavBarIcon.css';

class NavBarIcon extends Component {
  render() {
    return (
      <div className="Box">
        <div className={this.props.selected ? 'Selected' : 'NotSelected'}> 
          <div className='Icon'>
            {/* O */}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarIcon;
