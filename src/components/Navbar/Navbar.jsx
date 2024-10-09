import Movielogo from "../../assets/Movielogo.png";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">              
                <Link to='/'><img src={Movielogo} alt="movie-logo"/></Link>
                <Link to='/' className="company-title">CineShow</Link>
                <Link to='/' className="movies-link">Movies</Link>
                <Link to='/watchlist' className="watchlist-link">Watchlist</Link>
        </div>
    )
}


export default Navbar;