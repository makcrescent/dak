import React from 'react'

export default function Banner(props) {
  const {title} = props
    return (
        <>
        <div className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>{title}</h1>
            </div>
            <div className="col-md-5">
              <ol className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li className="active">About us</li>
              </ol>
            </div>
          </div>
        </div>
      </div>  
        </>
    )
}
