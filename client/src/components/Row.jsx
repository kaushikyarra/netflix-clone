import { useState, useEffect } from 'react';
import axios from '../api/axios';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use local backend proxy
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (error) {
                console.error("Error fetching data for row:", title, error);
            }
        };
        fetchData();
    }, [fetchUrl, title]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || movie.title}
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150x225?text=No+Image'; }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;
