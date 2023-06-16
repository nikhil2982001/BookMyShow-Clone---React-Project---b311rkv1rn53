import logo from "../../assets/logo_book_my_show.png"
import searcIcon from "../../assets/search-interface-symbol.png";
import heartIcon from "../../assets/heart.png";
import { useState } from "react";
export default function Navbar () {
    const [query, setQuery] = useState("");
    
    function handleSearch(){
        // console.log(query);
        // setQuery("");
    }
    return (
        <>
            <nav>
                <div className="primary-nav">
                    <img id="logo" src={logo} alt="logo" />  
                    <form onSubmit={handleSearch}>
                        <img src={searcIcon} alt="search" />
                        <input onChange={(e) => setQuery(e.target.value)} value={query} type="text"  placeholder="search for movies"/>      
                    </form> 
                    <select name="city" id="city-select">
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="banglore">Banglore</option>
                    </select>
                    <button className="btn btn_sign_in">Sign in</button>
                    <button className="btn btn_whishList">
                        <img src={heartIcon} alt="heart" />
                    </button>
                </div>
                <div className="secondary-nav">
                    <div className="left_nav_options">
                        <p className="nav-link">Movies</p>
                        <p className="nav-link">Events</p>
                        <p className="nav-link">Live Dramas</p>
                        <p className="nav-link">festivals</p>
                    </div>
                    <div className="right_nav_options">
                        <p className="nav-link">some options</p>
                        <p className="nav-link">some options</p>
                        <p className="nav-link">some options</p>
                        <p className="nav-link">some options</p>
                    </div>
                </div>
            </nav>
        </>
    )
}
