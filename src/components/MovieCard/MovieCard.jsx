import { Moviecontext } from '../../context/Moviecontext';
import './MovieCard.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

function MovieCard({movie}) {
    const {watchList, handleAddToWatchList, handleRemoveFromWatchList} = useContext(Moviecontext);

    function doesContain(){
        for(let i=0;i<watchList.length;i++){
            if(movie){
                if(watchList[i].id === movie.id){
                    return true;
                }
            }
           
        }
        return false;
    }
   
    function addToWatchList(){
        handleAddToWatchList(movie);
    }
    function deleteFromWatchList(){
        handleRemoveFromWatchList(movie);
    }
    return(
       <div className="movie-card">  
        <div className="card-img">
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie-img" />
        </div>
        <Link to={`/details/${movie.id}`} className="movie-details-link">i</Link>
          <div className="card-title">
                {movie.title}
            </div>
            <div className="card-overview">
                {movie.overview}
            </div>     
            {doesContain()?<button className="remove-from-watchlist" onClick={deleteFromWatchList}>remove</button>:<button className="add-to-watchlist" onClick={addToWatchList}>add</button>}
       </div> 
    );


}

export default MovieCard;