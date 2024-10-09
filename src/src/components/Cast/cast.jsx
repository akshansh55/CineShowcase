import Card from "../Card";
import './cast.css';

function Cast({cast}) {
    return(
        <div>
            <h3>Casts</h3>
            <div className="cast">
            {
                cast.map((item)=>{
                        return <Card item={item} key ={item.id} />
                })
            }
            </div>
        </div>
        
    )
}

export default Cast;