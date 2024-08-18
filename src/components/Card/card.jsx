import './card.css';
function Card({item}){
        return(
            <div className='card'>
                <div className="card-item">
                    <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="cast-img" />
                    <div className='actor-name'>{item.name}</div>
                    <div className='character'>({item.character})</div>
                </div>
            </div>
        )
}

export default Card;
