import React from 'react'

const TvShowsList = ({tvShows, imagePath, tvSchowsSection, starVote}) => {

  let numberS = tvSchowsSection.maxNumbers;
 
  return (
    <div className={'container-fluid ' + tvSchowsSection.classN} id="tvshows">
      {tvSchowsSection.htmlT}
      <div className='container text-center'>
        <div className='row'>
          {
            tvShows && tvShows.map((data, index) => {
              let len = index + 1;
              if(len <= numberS)
              {
                return (
                  <div className='col-lg-3 col-md-4 col-sm-6 movie-card' key={data.id}>
                    <div className="card bg-dark text-white">
                      <img src={imagePath + data.backdrop_path} className="card-img activeR" alt={data.title} />
                      <div className="card-img-overlay d-flex">
                        <h5 className="card-title card-mv text-truncate">{data.name}</h5>
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

export default TvShowsList;