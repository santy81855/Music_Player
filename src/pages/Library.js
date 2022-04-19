import React, { Component} from 'react';
import './Library.css';
// import songSelectedPNG from '../icons/song_selected.png';
// import playlistPNG from '../icons/playlist.png';
import LibraryItem from '../components/LibraryItem.js'
import Playlists from '../databases/songs/playlists.json';
import SongData from '../databases/songs/songs.json';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
                transitionDuration={100}
                containerClass="LibraryGalleryCenter"
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-20-px"
              >
                {/* {userSongs} */}
                { Playlists[0].songs.map(
                    (songIndex) => {
                      //console.log("AHH:", songIndex)
                      return(
                        <React.Fragment key={SongData[songIndex].id}>
                          <LibraryItem song={SongData[songIndex]} playlist={null} callback={this.props.callback}/>
                        </React.Fragment>
                      )
                    }
                  )
                }
              </Carousel>
            </div>
          </div>

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
                transitionDuration={100}
                containerClass="LibraryGalleryCenter"
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-20-px"
              >

                {/* <LibraryItem song={SongData[Playlists[0].songs[0]]}/> */}
                {/* <LibraryItem song={SongData[Playlists[0].songs[1]]}/> */}
                {/* <LibraryItem song={SongData[Playlists[0].songs[2]]}/> */}
                {/* <LibraryItem song={SongData[Playlists[0].songs[3]]}/> */}
                {/* <LibraryItem song={SongData[Playlists[0].songs[4]]}/> */}

                {/* {userPlaylists} */}
                { Playlists.map(
                    (userPlaylist) => {
                      //console.log("AHH:", userPlaylist)
                      return(
                        <React.Fragment key={SongData[userPlaylist.songs[0]].id}>
                          <LibraryItem song={null} playlist={userPlaylist} callback={this.props.callback}/>
                        </React.Fragment>
                      )
                    }
                  )
                }
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