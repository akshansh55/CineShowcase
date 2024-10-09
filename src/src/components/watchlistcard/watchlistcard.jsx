import { useContext } from "react";
import './watchlistcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";

function Watchlistcard({item }){
    let dispatch = useDispatch();
    return(
        <div className="watchlist-card">
            <div className="watchlist-card-img">
                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="movie-img" />
            </div>
            <div className="watchlist-card-details">
                    <div>  
                        {item.title}
                    </div>
                    <div className="movie-rating">
                        {item.vote_average}
                    </div>
                    <div>
                        {item.popularity}
                    </div>
                    {/* <div>
                        {details.genre[0].name}
                    </div> */}
                    <button onClick={()=>{dispatch({type:'DELETE_FROM_WATCHLIST',payload:item}) }} className="delete-button"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
           
        </div>
    )
}

export default Watchlistcard;