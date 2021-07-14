import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MovieSection.css';
import UserContext  from '../AppContext';
import { BrowserRouter, Route, Switch, Redirect,useHistory } from "react-router-dom";
function MovieSection() {

  let history = useHistory();
  const [movies,setMovies] = useState([]);  

  useEffect(() => {
    fetch("db/movieList")
        .then(res => res.json())
        .then(response => setMovies(response));
    }, []);


function redirectDetails(id){
  history.push(`/DetailsPgae/${id}/movieList`);
}

    return (
      <div className="outerMovieSection">
        <div className="MovieSectionTitle">Movies</div>
        <div className="MovieSection">
            {movies.map((movie) =>
              <img className="" onClick={() => redirectDetails(movie.id)} key={movie.id} src={window.location.origin+movie.image} alt={movie.name}/>
            )}
        </div>
    </div>
    )
};
    

export default MovieSection;
