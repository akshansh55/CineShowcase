import { useContext } from "react";
import './watchlistcard.css';


function Watchlistcard({item ,handleRemoveFromWatchList}){
    
    return(
        <div className="watchlist-card">
            <div className="watchlist-card-img">
                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="movie-img" />
            </div>
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
            <button onClick={()=>{handleRemoveFromWatchList(item)}}>Delete</button>
        </div>
    )
}

export default Watchlistcard;