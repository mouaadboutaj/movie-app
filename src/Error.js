import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {

  let styleBtn = {
    backgroundColor : 'rgb(204, 82, 0)',
    borderRadius : '5px',
    border : 'none',
    padding : '10px',
    textTransform : 'uppercase',
    color : '#fff',
    textDecoration : 'none',
  };

  return (
    <div className='container text-center'>
        <h1 className='display-5 mt-5'>Oops! page not found</h1>
        <img src='https://cdn-icons-png.flaticon.com/512/868/868792.png' style={{height : '300px'}}/>
        <p>We can't find the page you're looking for</p>
        <Link to='/' style={styleBtn}>Go back</Link>
    </div>
  )
}

export default Error;