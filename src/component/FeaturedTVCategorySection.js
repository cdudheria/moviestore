import React,{useEffect,useState} from 'react'
import './FeaturedTVCategorySection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FeaturedTVCategorySection() {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    fetch("db/featuredTvShow")
      .then(res => res.json())
        .then(response => setMovies(response));
    }, []);

    const imgRender = (movie) =>{
      <img className="" key={movie.id} src={window.location.origin+movie.image} alt={movie.name}/>
    };
    return (
      <div>
          <div style={{"font-size":"30px","font-family": "roboto", "background": "black"}}>Featured Tv Shows</div>
          <div className="FeaturedTVSection">
              {movies.map((movie) =>
                <img className="" key={movie.id} src={window.location.origin+movie.image} alt={movie.name}/>
              )}
          </div>
      </div>
    )
};
    

export default FeaturedTVCategorySection;
