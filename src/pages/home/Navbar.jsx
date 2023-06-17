import logo from "../../assets/logo_book_my_show.png";
import searchIcon from "../../assets/search-interface-symbol.png";
import heartIcon from "../../assets/heart.png";
import { useState } from "react";
import useAppContext from "../../useAppContext";
import { getMovieByGenre, getMoviesByQuery, getMovies } from "../../api";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const { genres, setMovies } = useAppContext();
    // const { genres, setMovies } = useAppContext();
    async function handleSearch(e) {
        e.preventDefault();
        const { data, error } = await getMoviesByQuery(query);
        if (!error) {
            console.log(data);
            setMovies(data["results"]);
        } else {
            console.log(error);
        }
    }
    async function handleGenre(id) {
        console.log(id);
        if (id === "all") {
            const { data, error } = await getMovies(id);
            if (!error) {
                setMovies(data["results"]);
                navigate("/");
            } else {
                console.log(error);
            }
            return null;
        }
        const { data, error } = await getMovieByGenre(id);
        if (!error) {
            setMovies(data["results"]);
            navigate("/");
        } else {
            console.log(error);
        }
    }
    return (
        <>
            <nav>
                <div className="primary-nav">
                    <img
                        onClick={() => navigate("/")}
                        id="logo"
                        src={logo}
                        alt="logo"
                    />
                    <form onSubmit={handleSearch}>
                        <img src={searchIcon} alt="search" />
                        <input
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            type="text"
                            placeholder="search for movies"
                        />
                    </form>
                    <button className="btn btn_sign_in">Sign in</button>
                    <button className="btn btn_whishList">
                        <img src={heartIcon} alt="heart" />
                    </button>
                </div>
                <div className="secondary-nav">
                    <div
                        onClick={() => handleGenre("All")}
                        className="btn btn_genre"
                    >
                        All
                    </div>
                    ;
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
