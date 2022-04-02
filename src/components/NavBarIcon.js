import React, { Component} from 'react';
import './NavBarIcon.css';

const update = () => {
  console.log("you just clicked!");  
};

class NavBarIcon extends Component {
  constructor(props) {
    super(props);
    this.selected = props.selected | false;
    this.handleClick = props.handleClick;
  }

  render() {
    if (this.selected)
      return (
      <div className="Box">
        <div className='Selected'> 
          <div className='Icon' onClick={this.handleClick}>
            {/* O */}
          </div>
        </div>
      </div>
    );
    else
      return (
        <div className="Box">
          <div className='NotSelected'>   
            <div className='Icon' onClick={this.handleClick}>
              {/* O */}
            </div>
          </div>
        </div>
      );
  }
}

export default NavBarIcon;
