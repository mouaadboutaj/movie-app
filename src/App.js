import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

// Clients components
import Home from './Home';

import MoviesSection from './MoviesSection';

import TvSection from './TvSection';

import AuthorsSection from './AuthorsSection';

import Error from './Error';


// Admin components
import Login from "./components/Admin/Login";
import Dashboard from "./components/Admin/Dashboard";

const App = () => {

  const [Movies, setMovies] = useState();
  const [Authors, setAuthors] = useState();
  const [tvShows, settvShows] = useState();
  const [Loading, setLoading] = useState({
    loaded : true,
    classn : "loading",
  });

  // demo API key
  const apiKey = `04c35731a5ee918f014970082a0088b1`;

  const mainURL = `https://api.themoviedb.org/3`;
  const imageURL = `https://image.tmdb.org/t/p/w1280`;

  const linkURL = `${mainURL}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const searchURL = `${mainURL}/search/movie?&api_key=${apiKey}&query=`;
  const tv = `${mainURL}/tv/popular?api_key=${apiKey}`;
  const authors = `${mainURL}/person/popular?api_key=${apiKey}`;
  
  const getApiData = async (link, action) => {
    const response = await fetch(link).then((response) => response.json());
    action(response.results);
  };
  
  useEffect(() => {
    // Get movies data
    getApiData(linkURL, setMovies);
    // Get authors data
    getApiData(authors, setAuthors);
    // Get tv show data
    getApiData(tv, settvShows);
  }, []);

  // After 5s stop loading spin
  setTimeout(() => {
    setLoading({
      loaded : false,
      classn : "",
    });
  }, 5000);

  // Convert vote numbers to star
  function starVote(value)
  {
    
    let start = value.toString();
    start = Number(start.split(".")[0]);
    start = start * 5 / 10;
    start = start.toString();
    start = Number(start.split(".")[0]);

    let arr = [];
    for (let i = 0; i < start; i++)
    {
      arr.push(<i className='fas fa-star text-yellow'></i>);   
    }
    for (let j = 0; j < (5 - start); j++) {
      arr.push(<i className='fas fa-star'></i>)
    }

    return arr;
  }

  return (
    <div className={"movieApp-c " + Loading.classn}>
      {
      !Loading.loaded && <BrowserRouter>
        <Routes>
          {/* Client path */}
          <Route path="/">

            {/* Home page (Home.js) */}
            <Route index element={<Home Movies={Movies} imageURL={imageURL} Authors={Authors} tvShows={tvShows} starVote={starVote}/>} />

            {/* Movies section (MoviesSection.js) */}
            <Route path="movies" element={<MoviesSection Movies={Movies} imageURL={imageURL} starVote={starVote}/>} />

            {/* Tv Show section (TvSection.js) */}
            <Route path="tv" element={<TvSection tvShows={tvShows} imageURL={imageURL} starVote={starVote}/>} />

            {/* Authors section (AuthorsSection.js) */}
            <Route path="actors" element={<AuthorsSection Authors={Authors} imageURL={imageURL}/>} />
            
            {/* Error page (Error.js) */}
            <Route path="*" element={<Error />} />
          </Route>

          {/* Admin path */}
          <Route path="/admin">
            {/* Admin Login section (Login.js) */}
            <Route index element={<Login />}/>
            {/* Admin dashboard section (Login.js) */}
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      }

      {
        Loading.loaded && <><span className="loader"></span><p className="loadertxt">Loading...</p></>
      }
    </div>
  );
};

export default App;
