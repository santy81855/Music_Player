import React, { Component } from 'react';
import {useState} from 'react';
import './SearchSong.css';
import SongData from '../databases/songs/songs.json';

function SearchSong(){
  const [searchTerm,setSearchTerm] = useState('')
  const searchStyle={
    border:'solid'
  }
  return(
    <div className="SearchSong">
      <input type="text" placeholder="Search By Song Title" style={searchStyle} onChange={e=>setSearchTerm(e.target.value)} />
      {SongData.filter((song)=>{
        if(searchTerm == ""){
          return song
        }
        else if(song.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return song;
        }
      }).map((song)=>{
        return(
          <div>
            Title: {song.title}, 
            By: {song.artist}, 
            Genre: {song.genre},
            Release year: {song.release_year},
            Picture: <img src = {song.cover_art} width = "5%" height = "20%"></img> <br/><br/>
          </div>
        )
      })}
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