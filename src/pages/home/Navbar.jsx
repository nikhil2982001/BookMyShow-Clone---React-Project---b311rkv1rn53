import logo from "../../assets/logo_book_my_show.png";
import searchIcon from "../../assets/search-interface-symbol.png";
import heartIcon from "../../assets/heart.png";
import { useState } from "react";
import useAppContext from "../../useAppContext";
// import { Link } from "react-router-dom";
export default function Navbar() {
    const [query, setQuery] = useState("");
    const { genres } = useAppContext();
    // const { genres, setMovies } = useAppContext();
    function handleSearch() {
        // console.log(query);
        // setQuery("");
    }
    async function handleGenre(id) {
        console.log(id);
    }
    return (
        <>
            <nav>
                <div className="primary-nav">
                    <img id="logo" src={logo} alt="logo" />
                    <form onSubmit={handleSearch}>
                        <img src={searchIcon} alt="search" />
                        <input
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            type="text"
                            placeholder="search for movies"
                        />
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
                    {genres.map((genre) => {
                        return (
                            <div
                                onClick={() => handleGenre(genre.id)}
                                key={genre.id}
                                className="btn btn_genre"
                            >
                                {genre.name}
                            </div>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
