import React, { Component} from 'react';
import './Library.css';
import settingsPNG from '../icons/settings.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import Playlists from '../databases/songs/playlists.json';
// playlist={Playlists[0]}


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class Library extends Component {
// function Library(props) {
  render() {
    return (
      <div className="Library">
        <div className="LibraryWrapper">
          {/* Library */}   
          <div className="LibraryDivider"/>

          <div className="LibraryGallery">
            <div className="LibraryGalleryCenter">
              {/* Songs */}
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                centerMode={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false} // This is a lie apparently
                autoPlaySpeed={600000} // 10 minutes, to make it not autoPlay.
                keyBoardControl={false}
                transitionDuration={500}
                containerClass="LibraryGalleryCenter"
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
              </Carousel>
            </div>
          </div>

          <div className="LibraryDivider"/>

          <div className="LibraryGallery">
            <div className="LibraryGalleryCenter">
              {/* PlayLists */}
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                centerMode={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false} // This is a lie apparently
                autoPlaySpeed={600000} // 10 minutes, to make it not autoPlay.
                keyBoardControl={false}
                transitionDuration={500}
                containerClass="LibraryGalleryCenter"
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "black"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "black"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "black"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "black"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "gold"}} />
                <img src={settingsPNG} className="PNG" alt="icon" style={{width:300, height: 300, background: "black"}} />
              </Carousel>
            </div>
          </div>

          <div className="LibraryDivider"/>
        </div>
      </div>
    );
  }
}

export default Library;