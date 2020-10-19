import React from 'react'
import renderHTML from 'react-render-html';

export default function ServiceCard({data}) {
    const {heading, body, image} = data
    console.log(data)
    return (
        <div className="service-box">
          <div className="ser-thumb"> <a href="service-details.html" className="view"><i className="fa fa-heartbeat" aria-hidden="true"></i></a> <img src={`/images/${image}`} alt=""/></div>
          <div className="ser-content">
            <h3><a href="service-details.html">{heading}</a></h3>
            <p>{renderHTML(body)}</p>
          </div>
        </div>
    )
}
