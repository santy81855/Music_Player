import React, { useState } from 'react';
import './SearchSong.css';
import SongData from '../databases/songs/songs.json';
import SearchResult from '../components/SearchResult.js';


function SearchSong() {
  const [searchTerm, setSearchTerm] = useState("")
  let song;

  return(
    <div className="SearchSong">
      <div className="ScrollView">
        <input className="SearchBox" type="text" placeholder="Search By Song Title" onChange={(e) => setSearchTerm(e.target.value)} />
        {SongData.filter(song = () => {
            if(searchTerm === "") {
              return song
            }
            else if(song.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return song;
            }
          }).map((song) => {
            return(
              <React.Fragment key={song.id}>
                <div className="ResultWrapper">
                  <div className="Divider"/>
                  <SearchResult Song={song}/>
                </div>
              </React.Fragment>
            )
          })
        }
        <div className="Divider"/>
      </div>
    </div>
  );
}
export default SearchSong;
// class SearchSong extends Component {

//   constructor(){
//     super();

//     this.state={
//       search:null
//     };
//   }

//   searchSpace=(event)=>{
//     let keyword = event.target.value;
//     this.setState({search:keyword})
//   }

//   render(){
//     const styleInfo = {
//       paddingRight:'10px',
//       backgroundColor: '--aud-primary',
//     }
//     const searchStyle ={
//       border:'solid',
//       borderRadius:'5px',
//       position:'center',
//       left:'10vh',
//       height:'3vh',
//       width:'20vh',
//       marginTop:'-1vh',
//       marginBottom:'10vh'
//     }
//     const items = SongData.filter((data)=>{
//       if(this.state.search == null)
//           return data
//       else if(data.title.toLowerCase().includes(this.state.search.toLowerCase())){
//           return data
//       }
//     }).map(data=>{
//       return(
//       <div>
//         <ul>
//           {/* <li style={{position:'relative',left:'10vh'}}> */}
//             <span style={styleInfo}>{data.title}</span>
//             <span style={styleInfo}>{data.artist}</span>
//             <span style={styleInfo}>{data.genre}</span>
//             <span style={styleInfo}>{data["release year"]}</span>
//           {/* </li> */}
//         </ul>
//       </div>
//       )
//     })

//     return (
//       <div>
//       <input type="text" placeholder="Search" style={searchStyle} onChange={(e)=>this.searchSpace(e)} />
//       {items}
//       </div>
//     )
//   }
// }

// export default SearchSong;