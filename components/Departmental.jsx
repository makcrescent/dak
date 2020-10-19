import React from 'react'
import ServiceCard from './ServiceCard'

export default function Departmental({services}) {
  console.log(services)
    return (
        <section className="home-services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title-3"> <strong>Our Departments</strong>
                <h2>Departmental Services</h2>
              </div>
            </div>
            
            <div className="col-md-12">
              <div className="service-style-1">
                <div className="row"> 
                  {services.map(service=>
                    (<div className="col-md-3 col-sm-3">
                      <ServiceCard data={service} />
                    </div>)
                  )}                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    )
}
