import React from 'react'

const MoviesList = ({moviesData, imagePath, moviesSection, starVote}) => {

  let numberS = moviesSection.maxNumbers;

  return (
    <div className={'container-fluid ' + moviesSection.classN} id="movies">
      {moviesSection.htmlT}
      <div className='container text-center'>
        <div className='row'>
          {
            moviesData && moviesData.map((data, index) => {
              let len = index + 1;
              if(len <= numberS)
              {
                return (
                  <div className='col-lg-3 col-md-4 col-sm-6 movie-card' key={data.id}>
                    <div className="card bg-dark text-white">
                      <img src={imagePath + data.backdrop_path} className="card-img activeR" alt={data.title} />
                      <div className="card-img-overlay d-flex">
                        <h5 className="card-title card-mv text-truncate">{data.title}</h5>
                        <div className='card-title stars'>
                          {
                            starVote(data.vote_average)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MoviesList;