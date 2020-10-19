import React from 'react'
import renderHTML from 'react-render-html';

export default function WelcomeMessage({data}) {
    return (
        <section className="welcome-section">
      <div className="container">
        <div className="row">
          <div className="welcome-box">
            <div className="col-md-6 col-sm-6">
              <div className="welcome-text">
                <div className="sectio-title-2"> <strong>{data.title}</strong>
                  <h2>{data.heading}</h2>
                </div>
                  {renderHTML(data.body)}
                </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="welcome-img"> <img src= {`/images/${data.image}`} alt=""/> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
