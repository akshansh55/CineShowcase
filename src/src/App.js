import DetailsPage from './pages/DetailsPage';
import NotfoundPage from './pages/NotfoundPage';
import HomePage from './pages/HomePage';
import watchList from './components/watchlist';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import { useState } from 'react';
import { Moviecontext } from './context/Moviecontext';
import Movies from './components/Movies';
import WatchListPage from './pages/WatchListPage';
import Navbar from './components/Navbar';





function App() {

  // const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem('movies')));
  // // // const [count, setCount] = useState(0);
  // // // const [input, setInput] = useState("");

  // console.log(watchList);
  // const increamentCount = useCallback(()=>setCount(count+1),[count]);
  // function handleAddToWatchList(movieObj){
  //       const updatedWatchList = [...watchList, movieObj];
  //       setWatchList(updatedWatchList);
  //       localStorage.setItem('movies',JSON.stringify(updatedWatchList))
        
  // }

  // function handleRemoveFromWatchList(movieObj){
  //   let filteredMovies = watchList.filter((movie)=>{
  //     return movie.id !== movieObj.id;
  //   });
  //   setWatchList(filteredMovies);
  //   localStorage.setItem('movies',JSON.stringify(filteredMovies))
   
  // }
 
  return (
  //   // <>
     
  //   //   <label htmlFor="Search">Search</label>
  //   //   <input  type="text" name="Search" onChange={(e)=>{setInput(e.target.value)}}/>
  //   //   <button onClick={increamentCount}>Increaemt counter</button> 
  //   //   <div>{count}</div>
  //   //   <br/>
  //   //   <br/>
  //   //   <hr/>

  //   //   <Callback  count ={count} xyz = {increamentCount}/>
  //   // </>
   
    <div className='app'>
      <BrowserRouter>
        
        {/* <Moviecontext.Provider value={{watchList,handleAddToWatchList,handleRemoveFromWatchList,setWatchList}}> */}
          <Navbar/>
            <Switch>
              {/* <Route path="/" render={()=>
                  <HomePage watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList= {handleRemoveFromWatchList}/>
              }   exact={true}/> */}
              <Route path="/" component={HomePage} exact= {true}/>
              <Route path="/details/:id" component={DetailsPage} exact= {true}/> 
              <Route path="/watchlist" component={WatchListPage} exact= {true} /> 
              <Route component={NotfoundPage} />
            </Switch>
            <footer className="footer">
                © 2024 Your Company Name. All rights reserved.
                        Unauthorized duplication or publication of any materials from this site is expressly prohibited.
                        
            </footer>
        {/* </Moviecontext.Provider>   */}
      </BrowserRouter>
    </div>
    // const [count, setCount]=useState(0);
    // const valueRef = useRef(0);
    // const inputref = useRef(0);
    
    
    // const onSubmit = ()=>{
    //   console.log(valueRef.current);
    //   console.log(inputref.current.value);
    //   inputref.current.focus();
    //   valueRef.current=valueRef.current+1;
    //   setCount(count+1);
    // }
   
    // return(
    //   <div >
    //       <span>{count}</span>
    //       <button onClick={onSubmit} >Increaemt</button>
    //       <span>{valueRef.current}</span>
    //       <input type="text"ref={inputref}/>


    //   </div>  
    // )
      
  );

  
}

export default App;
