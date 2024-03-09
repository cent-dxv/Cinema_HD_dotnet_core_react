import React, { useState, useEffect } from 'react';

import './home2.css';

// const API_KEY = "249f222afb1002186f4d88b2b5418b55";
// const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
// const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
// const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=`;



const API_SEARCH = `weatherforecast/search?search=`;
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
const API_URL = `weatherforecast/movies?page=`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getMovies(API_URL + page);
  }, [page]);

  const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();
    setMovies(respData.results);
  };

  const handlePageChange = (direction) => {
    if (direction === "next") {
      setPage(page + 1);
    }
    if (direction === "previous" && page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    query ? getMovies(API_SEARCH + query) :getMovies(API_URL + page);
  }, 
  [query]);



  return (
    <div>
      <div className="d-flex justify-content-center  p-2 z-50">
    
          <input
            id="search"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

      </div>
      <section>
        <div className="container-fluid mt-5 p-5">
          <div id="movie-content" className="row d-flex justify-content-center">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-0"
              >
                <div className="movie-card">
                  <img
                    className="img-fluid movie-img"
                    src={
                      movie.poster_path
                        ? IMAGE_PATH + movie.poster_path
                        : "https://i.ebayimg.com/images/g/1EMAAMXQdGJR2-n3/s-l1600.jpg"
                    }
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://i.ebayimg.com/images/g/1EMAAMXQdGJR2-n3/s-l1600.jpg";
                    }}
                    alt="Sorry, something went wrong"
                  />
                  <div className="movie-description p-3 d-flex justify-content-between align-items-center">
                    <h3 className="movie-title">{movie.title}</h3>
                    <h3 className="movie-vote">{movie.vote_average}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              id="previous"
              className="btn page-link"
              tabIndex="-1"
              onClick={() => handlePageChange("previous")}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button
              id="next"
              className="btn page-link"
              onClick={() => handlePageChange("next")}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
