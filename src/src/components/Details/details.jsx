import { useState, useEffect } from "react";
import Cast from '../Cast';
import DetailsBanner from "../DetailsBanner";
import { useParams } from "react-router-dom";

function Details(){
   const [details, setDetails] = useState([]);
    const {id} = useParams(); 

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=033d42b23efdcf3fc8550732f7f690d0&append_to_response=credits,videos`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setDetails(res);
        });
    },[])

    return(
        <div className="details">
            <DetailsBanner  details={details}/>
            {details.credits?<Cast cast= {details.credits.cast.slice(0,8)}/>: null}
        </div>
    )
}
export default Details;





 
