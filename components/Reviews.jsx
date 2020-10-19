import React from 'react'

export default function Reviews() {
    return (
        <section className="testi-faq">
        <div className="container">
          <div className="row"> 
            <div className="col-md-6">
              <div className="home-testimonials">
                <div className="sectio-title-2"> <strong>Read What Says Our</strong>
                  <h2>Happy Patients</h2>
                </div>
                <div id="testimonial-slider" className="owl-carousel owl-theme"> 
                  <div className="item">
                    <div className="testimonial-holder">
                      <div className="user-thumb"> <img src="images/tuser.jpg" alt=""/> <strong>Anna Anderson</strong>
                       <i>A heart patient</i> </div>
                      <div className="test-text">
                        <p>An exellent hospital and a Cardiologists. Quisque egestas libero vitae lacus sagittis, eget viverra tellus vehicula. Aenean efficitur faucibus felis, non laoreet nisl congue non. In quis pharetra urna. Aliquam in enim efficitur, bibendum dolor eu, elementum turpis.
    </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-holder">
                      <div className="user-thumb"> <img src="images/tuser-2.jpg" alt=""/> <strong>Anna Anderson</strong>
                       <i>A heart patient</i> </div>
                      <div className="test-text">
                       <p>An exellent hospital and a Cardiologists. Quisque egestas libero vitae lacus sagittis, eget viverra tellus vehicula. Aenean efficitur faucibus felis, non laoreet nisl congue non. In quis pharetra urna. Aliquam in enim efficitur, bibendum dolor eu, elementum turpis.
    </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-holder">
                      <div className="user-thumb"> <img src="images/tuser.jpg" alt=""/> <strong>Anna Anderson</strong>
                       <i>A heart patient</i> </div>
                      <div className="test-text">
                        <p>An exellent hospital and a Cardiologists. Quisque egestas libero vitae lacus sagittis, eget viverra tellus vehicula. Aenean efficitur faucibus felis, non laoreet nisl congue non. In quis pharetra urna. Aliquam in enim efficitur, bibendum dolor eu, elementum turpis.
    </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-faq">
                <div className="sectio-title-2"> <strong>Feel Free For</strong>
                  <h2>Any FAQ’s</h2>
                </div>
                <div className="faqs">
                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> How much you charge for consultancy </a> </h4>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div className="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title"> <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What kind of patients do you treat? </a> </h4>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title"> <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Where does my refering Cardiologist go? </a> </h4>
                      </div>
                      <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
        )
}
