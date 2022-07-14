import React from 'react'

import Header from "./components/Main/Header";
import AuthorsList from "./components/Home/AuthorsList";
import Footer from "./components/Main/Footer";

const AuthorsSection = ({Authors, imageURL}) => {

  let auCompHtml = {classN : '', htmlT : <h1 className='text-center'>Actors</h1>, maxNumbers : 20};

  return (
    <>
      <Header />
       <AuthorsList authorsData={Authors} imagePath={imageURL} authorsSection={auCompHtml}/>
      <Footer />
    </>
  )
}

export default AuthorsSection;