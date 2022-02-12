import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import {imageURL,API_KEY} from '../../Constants/Constants'
import './RowPosts.css'
// let's view the trailer or video related to movie by using react-youtube. react-youtube has video playing screen, pause like in youtube, we have to id from tmda api to this react-youtube to get the trailer.
import YouTube from 'react-youtube'
// opts to set react-youtube iframe size , url and autoplay On & Off.
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
function RowPosts(props) {
  //console.log(props);
  const [shows, setShows] = useState([]) // empty array is initialized because, when mapping it will gets error if shows is empty.
  const [youtube, setYoutube] = useState(""); // to set the key of trailer from tmda api movie search
  
  useEffect(() => {
   axios.get(props.url).then((response)=>{
     //console.log(response.data.results);
     setShows(response.data.results);
   }).catch((err)=>{
     alert("Error : "+err);
   })
  }, [])

  // function to get search key in youtube to view in react-youtube
  const youtubeHandler = (id) =>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
      //response data has, results array of values, key object's value is passed to react-youtube we can see the video set in youtube, mostly the first array holds the trailer of movie
      // let's store key in a state.
      if(res.data.results.length!==0){
        //console.log(res.data.results[0].key);
        setYoutube(res.data.results[0].key);
      }else{
        console.log("No videos found in youtube");
      }
    })
  }

  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
      {shows.map((obj)=>
          <img key={obj.id} onClick={
            () => youtubeHandler(obj.id)
          } className={props.isSmall ? "smallPoster" : "poster"}  src={`${imageURL+obj.backdrop_path}`} alt={obj.name+" poster"} />
      )}
       </div>
       {/* view the youtube if only key is present and a video is found */}
      { youtube && <YouTube videoId={youtube} opts={opts} onEnd={()=>setYoutube("")}/>} 
    </div>
  )
}

export default RowPosts


     