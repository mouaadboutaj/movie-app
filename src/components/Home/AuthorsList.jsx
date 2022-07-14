import React from 'react'

const AuthorsList = ({authorsData, imagePath, authorsSection}) => {

  let numberS = authorsSection.maxNumbers;

  return (
    <div className={'container-fluid ' + authorsSection.classN} id="authors">
      {authorsSection.htmlT}
      <div className='container text-center'>
        <div className='row'>
          {
            authorsData && authorsData.map((data, index) => {
              let len = index + 1;
              if(len <= numberS)
              {
                return (
                  <div className='col-lg-2 col-md-3 col-sm-6 movie-card' key={data.id}>
                    <div className="card bg-dark text-white">
                      <img src={imagePath + data.profile_path} className="card-img activeR" alt={data.name} />
                      <div className="card-img-overlay">
                        <h5 className="card-text text-truncate">{data.name}</h5>
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

export default AuthorsList;