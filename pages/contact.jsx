import React from 'react'
import Banner from '../components/Banner'

export default function contact() {
    return (
        <>
            <Banner title="Contact Us"/> 
            <div class="main-content">
            <div class="contact">
              <div class="container">
                <div class="row">
                  <div class="col-md-7">
                    <div class="contact-form">
                      <div class="col-md-12">
                        <h3>Get in Touch</h3>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Your Name *"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group">
                          <input type="email" class="form-control" placeholder="Email *"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Phone *"/>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Subject"/>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="input-group">
                          <textarea placeholder="Your Message *"></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="input-group text-center">
                          <input type="submit" class="submit-btn" value="Get Contact"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="contact-address">
                      <h5>Contact Information:</h5>
                      <ul>
                        <li> <span class="icon"><i class="fa fa-hospital" aria-hidden="true"></i></span> <span class="add-text">Cheryy Road, Wirral Road<br/>
                          Heart care Building,<br/>
                          United Kingdom</span> </li>
                        <li> <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i> </span> <span class="add-text">+110 9876 5433<br/>
                          +440 6589 9874</span> </li>
                        <li> <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i> </span> <span class="add-text"><strong>For Inquiry:</strong> info@heartcare.com</span> </li>
                        <li> <span class="icon"><i class="fa fa-globe" aria-hidden="true"></i> </span> <span class="add-text"><strong>For Details:</strong> www.Heartcare.com</span> </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </>
    )
}
