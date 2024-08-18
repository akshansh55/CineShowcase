import { Moviecontext } from "../../context/Moviecontext";
import Watchlistcard from "../watchlistcard/watchlistcard";

import './watchlist.css';

import { useContext, useState } from "react";
function WatchList(){

    const {watchList, handleAddToWatchList, handleRemoveFromWatchList,setWatchList} = useContext(Moviecontext);
    const [search, setSearch] = useState("");

    function handlesearch(e){
        setSearch(e.target.value);
    }
    function handleAscen(){
        const sortAsen = watchList.sort((movieObjA,movieObjB)=>{
            return movieObjA.vote_average-movieObjB.vote_average;
        })
    setWatchList([...sortAsen]);
    }
    function handleDescen(){
        const sortDescen = watchList.sort((movieObjA,movieObjB)=>{
            return movieObjB.vote_average-movieObjA.vote_average;
        })
    setWatchList([...sortDescen]);
    }

        
        return(
        <div className="watchlist-main">
                <div className="watchlist-heading-row">
                        <ul>
                            <li>Name</li>
                            <li>Ratings</li>
                            <li>Popularity</li>
                        </ul>
                </div>  
                
            <div className="watchlist">
                <input onChange={handlesearch} value={search} />
                <button onClick={handleAscen}>Ascen</button>
                <button onClick={handleDescen}>Descen</button>
                    {watchList.filter((item)=>{
                        return item.title.toLowerCase().includes(search.toLowerCase())
                    }).map(function(item){
                    return <Watchlistcard  item ={item} handleRemoveFromWatchList ={handleRemoveFromWatchList} />
                })}
                
            </div> 
        </div>
        )
}

export default WatchList;