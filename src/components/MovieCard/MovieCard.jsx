import { Moviecontext } from '../../context/Moviecontext';
import './MovieCard.css';
import { Link } from "react-router-dom";
// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieCard({movie}) {
    // const {watchList, handleAddToWatchList, handleRemoveFromWatchList} = useContext(Moviecontext);
    const dispatch = useDispatch();

    const watchlist = useSelector(state=>{return state.watchlist}); 
    function doesContain(){
        for(let i=0; i<watchlist.length;i++){
            if(movie){
                if(watchlist[i].id === movie.id){
                    return true;
                }
            }
           
        }
        return false;
    }
   
    function addToWatchList(){
        dispatch({type:'ADD_TO_WATCHLIST', payload:movie});
    }
    function deleteFromWatchList(){
        dispatch({type:'DELETE_FROM_WATCHLIST', payload:movie});
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
                
            {doesContain()?<button className="remove-from-watchlist" onClick={deleteFromWatchList}>-</button>:<button className="add-to-watchlist" onClick={addToWatchList}>+</button>}
       </div> 
    );


}

export default MovieCard;