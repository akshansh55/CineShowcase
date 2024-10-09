import { Moviecontext } from "../../context/Moviecontext";
import Watchlistcard from "../watchlistcard/watchlistcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpLong} from '@fortawesome/free-solid-svg-icons';
import {faArrowDownLong} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import './watchlist.css';
import { useRef, useState } from "react";

function WatchList(){

    // const {watchList, handleAddToWatchList, handleRemoveFromWatchList,setWatchList} = useContext(Moviecontext);
    const watchlist = useSelector(state=>{return state.watchlist}); 
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const inputref = useRef("");
  
        if (inputref.current) {
            inputref.current.focus();
        }
    

    function handlesearch(e){
        setSearch(e.target.value);
    }
      function handleAscen(){
          const sortAsen = watchlist.sort((movieObjA,movieObjB)=>{
              return movieObjA.vote_average-movieObjB.vote_average;
          })
          dispatch({type:'SET_WATCHLIST',payload:sortAsen});
      }
      function handleDescen(){
          const sortDescen = watchlist.sort((movieObjA,movieObjB)=>{
              return movieObjB.vote_average-movieObjA.vote_average;
          })
          dispatch({type:'SET_WATCHLIST',payload:sortDescen});
      }

        
        return(
            
        <div className="watchlist-main">
            <div className="search-bar">
                    <input onChange={handlesearch} value={search} ref={inputref} placeholder="Search For Movies"/>
                </div>
                <div className="watchlist-heading-row">
                        <ul className="watchlist-heading-list">
                            <li>Title</li>
                            <li className="sorting"><FontAwesomeIcon icon={faArrowUpLong} onClick={handleAscen} className="sorting-arrow" />Ratings<FontAwesomeIcon icon={faArrowDownLong} onClick={handleDescen} className="sorting-arrow" /></li>
                            <li>Popularity</li>
                        </ul>
                </div>  
                
            <div className="watchlist">
                    {watchlist.filter((item)=>{
                        return item.title.toLowerCase().includes(search.toLowerCase())
                    }).map(function(item){
                    return <Watchlistcard  item ={item} />
                })}
                
            </div> 

           
        </div>
        )
}

export default WatchList;