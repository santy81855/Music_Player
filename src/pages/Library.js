import React, { Component } from 'react';
import './Library.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import settingsPNG from '../icons/settings.png';


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
  render() {
    return (
      <div className="Library">
        <div className="LibraryWrapper">
          {/* Library */}   
          <div className="LibraryDivider"/>

          <div className="LibraryGallery">
            <div className="LibraryGalleryButton"/>
            <div className="LibraryGalleryCenter">
              Songs
            </div>
            <div className="LibraryGalleryButton"/>
          </div>

          <div className="LibraryDivider"/>

          <div className="LibraryGallery">
            <div className="LibraryGalleryButton"/>
            <div className="LibraryGalleryCenter">
              Playlists
            </div>
            <div className="LibraryGalleryButton"/>
          </div>

          <div className="LibraryDivider"/>
        </div>
      </div>
    );
  }
}

export default Library;