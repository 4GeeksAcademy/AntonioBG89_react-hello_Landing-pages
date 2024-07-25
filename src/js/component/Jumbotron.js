import React from 'react'

const Jumbotron = () => {
    return (
        <div className="card mb-5 bg-light" style={{textAlign: "start"}} >
        <div className="card-body">
          <h5 className="card-title display-4">A Warm Welcome!</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Call to Action!</a>
        </div>
      </div>
    )
}

export default Jumbotron;