import {createStore} from 'redux';
import watchlist from './components/watchlist';
function WatchListReducer(state={watchlist:[]},action){
        switch(action.type){
            case 'ADD_TO_WATCHLIST': {
                    // return ()
            }
            case 'DELETE_FROM_WATCHLIST': {

            }
            default: 
            return state

        }
}
const store = createStore(WatchListReducer);
export default store;