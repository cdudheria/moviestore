import React,{useEffect,useState} from 'react'
import './FeaturedMovieCategorySection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function FeaturedMovieCategorySection() {
const [movies,setMovies] = useState([]);

  useEffect(() => {
    fetch("db/featuredMovies")
      .then(res => res.json())
        .then(response => setMovies(response));
    }, []);

    const imgRender = (movie) =>{
      <img className="" key={movie.id} src={window.location.origin+movie.image} alt={movie.name}/>
    };
    return (
      <div >
          <div style={{"font-size":"30px","font-family": "roboto", "background": "black"}}>Featured Movies</div>
          <div className="FeaturedMovies">
              {movies.map((movie) =>
                <img className="" key={movie.id} src={window.location.origin+movie.image} alt={movie.name}/>
              )}
          </div>
      </div>
    )
};
    

export default FeaturedMovieCategorySection;
