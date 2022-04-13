import './NavBarIcon.css';
import React from 'react';


class NavBarIcon extends React.Component {
  render() {
    return (
      <div className="Box">
        <div className={this.props.selected ? 'Selected' : 'NotSelected'}> 
          <div className='Icon'>
            {/* O */}
            <img src={this.props.image} alt="icon"/>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarIcon;
