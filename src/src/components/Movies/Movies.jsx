import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import MovieCard from "../MovieCard";
import './Movies.css';
function Movies() {
    let [movies, setMovies] = useState([]);
    let [pageNo, setPageNo] = useState(1);

    function handleprevious(){
        if(pageNo===1) return;
        setPageNo(pageNo-1)
    }
    function handlenext(){
        if(pageNo===500) return;
        setPageNo(pageNo+1)
    }


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=033d42b23efdcf3fc8550732f7f690d0&language=en-us&page=${pageNo}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res);
            setMovies(res.results);
        }).catch((error) => console.error("Error fetching data: ", error));
       
    },[pageNo])
    return (
        <div className="movies">
            <h3 className="movies-category-heading">Trending Movies</h3>
            <div className="card-parent">
                {
                    movies.map((movie)=>{
                        return(<MovieCard key={movie.id} movie={movie}  />)  
                    })
                }
            </div>
            <Pagination handlenext={handlenext} handleprevious={handleprevious} pageNumber={pageNo}/>
        
       </div>

    )
}

export default Movies;