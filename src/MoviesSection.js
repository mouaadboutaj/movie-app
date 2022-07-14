import React from 'react'

import Header from "./components/Main/Header";
import MoviesList from "./components/Home/MoviesList";
import Footer from "./components/Main/Footer";

const MoviesSection = ({Movies, imageURL, starVote}) => {

  let mvCompHtml = {classN : '', htmlT : <h1 className='text-center'>Movies</h1>, maxNumbers : 20};

  return (
    <>
      <Header />
       <MoviesList moviesData={Movies} imagePath={imageURL} moviesSection={mvCompHtml} starVote={starVote} />
      <Footer />
    </>
  )
}

export default MoviesSection;