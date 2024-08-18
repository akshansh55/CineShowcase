import { createContext } from "react";


 export const Moviecontext =createContext({
   details:{},
    watchList:[],
    setWatchList:()=>{},
    handleAddToWatchList:()=>{},
    handleRemoveFromWatchList:()=>{},
  });

