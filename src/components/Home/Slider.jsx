import React from 'react'

const Slider = ({moviesData, imagePath}) => {
  const activeClass = ["active", "", "", "",""];
  return (
    <>
      <div className='container'>
        <div id="movie-slider" className="carousel slide carousel-fade movie-slider" data-bs-ride="carousel" >
            <div className="carousel-indicators">              
                {activeClass.map((active, index) => <button key={index + 1} type="button" data-bs-target="#movie-slider" data-bs-slide-to={index} className={active} aria-current="true" aria-label={"Slide " + (index + 1)}></button> )}
            </div>
            <div className="carousel-inner">
                {
                    moviesData && moviesData.map((data, index) => {
                        let active = (index === 0) ? "active" : "";
                        let len = index + 1;
                        if(len <= 5)
                        {
                            return (
                                <div className={"carousel-item " + active} key={data.id}>
                                    <img src={imagePath + data.backdrop_path} className="d-block w-100 image-slider" alt={data.title}/>
                                    <div className="carousel-caption d-none d-md-block slider-text">
                                        <h2>{data.title}</h2>
                                        <p>{data.overview.slice(0, 150) + "..."}</p>
                                        <button><i className="fas fa-play"></i> Watch now</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#movie-slider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#movie-slider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    <div className='container text-center see-more bounce'>
        <p><a href='#movies'><i className="fas fa-angle-down"></i></a></p>
    </div>
    </>
  )
}

export default Slider;