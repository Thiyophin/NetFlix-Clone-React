import React, { useEffect,useState } from 'react'
// since we have created axios instance using baseURL let's import it
import axios from '../../axios'
import { imageURL } from '../../Constants/Constants'
import './Banner.css'
function Banner(props) {
  // Let's create a state store movie details fetched by using axios api call
  // we can avoid the ternary operators, if movie present by making intial values of movie as empty object {}
  const [movie,setMovie] = useState(); //setting initial value to 'undefined' since we used ternary operator to find values of movie object . to avoid ternary operator use we have initial movie to an empty object.
  // when banner mounts we need to get api data of movies . so second argument will be [] empty array
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      let min = 0;
      let max = 19;
      let index = Math.floor(Math.random() * (max - min + 1)) + min;
      //console.log("number : "+index);
      setMovie(response.data.results[index]);
      console.log(response.data.results[index]);
      //console.log("state in banner");
      //console.log(movie);
    })
  }, []);
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path : ""})`}}>
      <div className='content'>
        {/* it's generate error if we just call {movie.title}, since after this component is mounted the value is fetched so let's use ternary operator to avoid this error. */}
        {/* sometimes movie name is in name key than in title key , we have check it also */}
        <h1 className='title'>{movie ? movie.title ? movie.title : movie.name : ''}</h1>
      <div className="banner_buttons">
        <button className="button">Play</button>
        <button className="button">Info</button>
      </div>
      <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
     
    </div>
  )
}

export default Banner
