import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="text-center" style={{marginTop: 10}}>
        <div className="col-lg-12 col-md-10">
          <img className="img-error d-block mx-auto" src="https://bootdey.com/img/Content/fdfadfadsfadoh.png" />
          <h2>404 Not Found</h2>
          <p>Sorry, an error has occured, Requested page not found!</p>
          <div className="error-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <span className="glyphicon glyphicon-arrow-left" />
              Back Home 
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default NotFound