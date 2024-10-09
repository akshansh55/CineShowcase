import { useState, useEffect } from "react";
import './banner.css';
function Banner(){

    let [film, setFilm] = useState([]);

        
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=033d42b23efdcf3fc8550732f7f690d0').then((res)=>{
            return res.json();
        }).then((res)=>{
            let id =Math.floor(Math.random()*19);
            setFilm(res.results[id]);
        }).catch((error) => console.error("Error fetching data: ", error));
       
    },[]);


        return(
            <div className="banner">
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} alt="movie-img" />
                </div>
                <div className="banner-title">
                    {film.title}
                </div>
            </div>
            
        )
}

export default Banner;