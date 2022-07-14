import React from 'react'

const Footer = () => {
  return (
    <div className='container-fluid bg-dark'>
        <div className='container p-3'>
            <div className='row'>
              <div className='col-md-9 mt-2 col-sm-12 text-lg-start text-center'>
                <h6>Made with <i className="fas fa-heart text-yellow"></i> by Mouaad Boutaj</h6>
              </div>
              <div className='col-md-3 s-buttons d-md-block d-none'>
                <a href='https://github.com/mouaadboutaj'><i className="fab fa-github"></i></a>
                <a href='#'><i className="fab fa-facebook-f"></i></a>
                <a href='#'><i className="fab fa-instagram"></i></a>
                <a href='#'><i className="fab fa-twitter"></i></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;