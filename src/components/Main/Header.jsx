import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  const [progress, setProgress] = useState(0);
  const [itemName, setitemName] = useState();

  function handleNameChange(event)
  {
      setitemName(event.target.value);
  }

  return (
    <>
    <LoadingBar color='#cc5200' progress={progress} onLoaderFinished={() => setProgress(0)} />
    <div id='nav-movie'>
        <div className='container-fluid'>
            <div className='navbar navbar-expand-md'>
                <div className='container-fluid'>
                    <div className='navbar-brand'>BOUTAJ</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#movie-mobile" aria-controls="movie-mobile" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars menu"></i></span>
                    </button>
                    <div className='collapse navbar-collapse nav-mobile' id='movie-mobile'>
                        <ul className='navbar-nav movie-nav bg-md-dark'>
                            <li className='nav-item'>
                                <Link to="/" className='nav-link' onClick={() => setProgress(100)}>HOME</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/movies" className='nav-link' onClick={() => setProgress(100)}>MOVIES</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/tv" className='nav-link' onClick={() => setProgress(100)}>TV SHOWS</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/actors" className='nav-link' onClick={() => setProgress(100)}>ACTORS</Link>
                            </li>
                            <li className='nav-item d-md-none'>
                                <input type='text' placeholder='Search movies...' className='search m-search' value={itemName} onChange={handleNameChange}/>
                                <span><i className='fas fa-search'></i></span>
                            </li>
                        </ul>
                    </div>
                    <ul className='navbar-nav d-none d-lg-block'>
                        <li className='nav-item'>
                            <input type='text' placeholder='Search movies...' className='search' value={itemName} onChange={handleNameChange}/>
                            <span><i className='fas fa-search'></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Header;
