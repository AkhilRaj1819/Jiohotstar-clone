import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([])
  const apiKey = 'd46fa93c1b60f7c37509b8ce643bc1a0';
  const url = 'https://api.themoviedb.org/3/discover/movie';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url, {
          params: { api_key: apiKey, page: 1 },
        });

        const movies = response.data.results;
        setWatchedMovies(movies)
        const randomIndex = Math.floor(Math.random() * movies.length);
        setRandomMovie(movies[randomIndex]);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      <Header className="header" />
      <div className="top-box">
        <div className="top-box-image">
          <img
            src="https://shifu.hotstarext.com/SOURCE/LIVE/cd-2025-03-13/TATAIPLStarts22ndMarchWeb-c9a10f57-b1b4-4d35-85a1-0cd40b3eaa35.jpg"
            className="image1"
            alt="ad"
          />
          <div className="logo-image">
            <img
              src="https://brand-img1.hotstarext.com/image/upload/v1739279601/YR/Growth_120x120_Square_Logo.png"
              className="image2"
              alt="logo"
            />
            <h3>TATA IPL</h3>
            <h4>start march 22</h4>
          </div>
        </div>
      </div>

      {randomMovie && (
        <div
          className="main-holder"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',

          }}
        >
          <div className='gradient'></div>
          <div className="movie-details">
            <p className="movie-title">{randomMovie.title}</p>
            
            <div className='date'>
              
              <p>{randomMovie.release_date} | </p>
              <p> {randomMovie.original_language.toUpperCase()}</p>
            </div>
            <p className='popularity'>Popularity : {randomMovie.popularity}</p>
            <p className="movie-overview">{randomMovie.overview}</p>
            <button className='watchnow-button'> ▶ Watch Now</button>
          </div>
        </div>
      )}
      <div className="watched">
        <h2>Watched Today</h2>
        <div className="watched-cards">
          {watchedMovies.map((movie, index) => (
            <div
              className="movie-card"
              key={movie.id}
              style={{
                animationDelay: `${index * 0.2}s`, // Gradual appearance
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
