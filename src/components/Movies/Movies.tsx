import React, { useEffect, useState } from "react";
import './Movies.css';

const Movies: React.FC = (data: any) => {
    const [movies, setMovies] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        getdata();
    }, [data]);

    const getdata = async () => {
        await fetch("https://api.tvmaze.com/shows")
            .then((response) => response.json())
            .then((res) => setMovies(res))
            .catch(err => console.log(err));
    };

    const Movies: any = movies.filter((obj: any) => {
        return obj.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    return (
        <div>
            <div >
                <h1 className="header"> MOVIES</h1>
            </div>

            <div >
                <input
                    type="text"
                    placeholder="search"
                    className="inputbox"
                    onChange={(e: any) => {
                        setSearchWord(e.target.value);
                    }}
                />
            </div>
            <div className="moviesContainer">
                {Movies.map((movie: any) => (
                    <div key={movie.id}>
                        <div className="card">
                            <div>
                                <img className="image" src={movie.image.medium} alt="#" />
                            </div>
                            <div>
                                <a href={movie.url} className="titleText" >{movie.name}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Movies;