import {createStore} from 'redux';


const watchlist = JSON.parse(localStorage.getItem('movies'))? JSON.parse(localStorage.getItem('movies')):[];

function WatchListReducer(state={watchlist:watchlist},action){
        switch(action.type){
            case 'SET_WATCHLIST':{
                    return {...state, watchlist:[...action.payload]}
                }
            case 'ADD_TO_WATCHLIST': {
                let newState = { ...state, watchlist: [...state.watchlist,action.payload]} 
                 localStorage.setItem('movies', JSON.stringify(newState.watchlist))       
                 return newState;          
            }
            case 'DELETE_FROM_WATCHLIST': {
                        let filteredMovies = state.watchlist.filter(movie => movie.id!==action.payload.id);
                        localStorage.setItem('movies', JSON.stringify(filteredMovies));

                        let newState = {...state, watchlist:[...filteredMovies]}
                        return newState;
            }
            default: 
            return state

        }
}
const store = createStore(WatchListReducer);
export default store;