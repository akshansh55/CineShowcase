import React from "react";

function Callback({count, xyz}){
    console.log("child rerendered")
    return(
        <div>
           <button onClick={xyz}>Increament counter</button> 
            {count}
        </div>
    )
}

export default React.memo(Callback);
