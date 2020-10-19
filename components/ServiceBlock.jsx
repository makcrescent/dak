import React from 'react'

export default function ServiceBlock() {
    return (
        <section className="home-features">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="features-box">
                <h3>Cardio Monitoring</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <a href="appointment.html">Get Free Appointment</a> </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="features-box selected">
                <h3>First Aid</h3>
                <p>Pellentesque ligula odio, tempor sit amet fringilla vitae, pulvinar ullamcorper quamenatibus et magnis dis parturient montes nasce</p>
                <a href="contact-2.html">Contact Us</a> </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="features-box">
                <h3>Emergency Help</h3>
                <p><span>Monday-Friday:</span> Full Day<br/>
                  <span>Satuday:</span> Full Day<br/>
                  <span>Sunday:</span> 7:00am - 05:00pm<br/>
                </p>
                <a href="#">Callfor INfo: +221 8765 432</a> </div>
            </div>
          </div>
        </div>
      </section>
  
    )
}
