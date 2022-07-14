import React from 'react'

import Header from "./components/Main/Header";
import TvShowsList from "./components/Home/TvShowsList";
import Footer from "./components/Main/Footer";

const TvSection = ({tvShows, imageURL, starVote}) => {

  let tvCompHtml = {classN : '', htmlT : <h1 className='text-center'>TV Shows</h1>, maxNumbers : 20};

  return (
    <>
      <Header />
       <TvShowsList tvShows={tvShows} imagePath={imageURL} tvSchowsSection={tvCompHtml} starVote={starVote} />
      <Footer />
    </>
  )
}

export default TvSection;