import { useState, useEffect } from "react";
import Details from "../Details";
import './DetailsBanner.css';

function DetailsBanner({details}){
    return (
        <div className="details-banner">
            <div className="details-banner-img">
                <img src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt="movie-img" className="details-banner-img-poster" />
            </div>    
            <div className="org_title">{details.original_title}</div> 
            {/* {details.genres&&<div>{details.genres[0].name}{details.genres[1].name}{details.genres[2].name}</div>} */}
            {details.videos && <a href={`https://www.youtube.com/watch?v=${details.videos.results[0].key}`} target="_blank" className="trailer-link">Watch Trailer</a>}
        </div>
    )
}

export default DetailsBanner;