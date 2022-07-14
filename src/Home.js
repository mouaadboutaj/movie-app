import React from 'react'

// Calling components
import Header from "./components/Main/Header";
import Slider from "./components/Home/Slider";
import MoviesList from "./components/Home/MoviesList";
import TvShowsList from "./components/Home/TvShowsList";
import AuthorsList from "./components/Home/AuthorsList";
import Footer from "./components/Main/Footer";

const Home = ({Movies, imageURL, Authors, tvShows, starVote}) => {

  let classN = 'home-section-list';
  let popular = (section) => {return `Popular ${section} in BOUTAJ`};
  let maxNumbers = 8;

  let mvCompHtml = {classN, htmlT : <h5>{popular("movies")}</h5>, maxNumbers};
  let tvCompHtml = {classN, htmlT : <h5>{popular("tv shows")}</h5>, maxNumbers};
  let auCompHtml = {classN, htmlT : <h5>{popular("actors")}</h5>, maxNumbers};

  return (
    <>
     <Header />
       <Slider moviesData={Movies} imagePath={imageURL}/>
       <MoviesList moviesData={Movies} imagePath={imageURL} moviesSection={mvCompHtml} starVote={starVote} />
       <TvShowsList tvShows={tvShows} imagePath={imageURL} tvSchowsSection={tvCompHtml} starVote={starVote} />
       <AuthorsList authorsData={Authors} imagePath={imageURL} authorsSection={auCompHtml}/>
     <Footer />
    </>
  )
}

export default Home;