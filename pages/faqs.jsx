import React from 'react'
import Banner from '../components/Banner'

export default function faqs() {
    return (
        <>
            <Banner title="FAQs"/> 
            <div class="main-content">
            <section class="faqs">
              <div class="container">
                <div class="row">
                  <div class="col-md-9">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                          <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> How much you charge for consultancy </a> </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                          <div class="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                          <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What kind of patients do you treat? </a> </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                          <div class="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                          <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Where does my refering Cardiologist go? </a> </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                          <div class="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFour">
                          <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> What is the proceedure of laser Heart? </a> </h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                          <div class="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                        </div>
                      </div>
                      
                      
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFive">
                          <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Where does my refering Cardiologist go? </a> </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                          <div class="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                        </div>
                      </div>
                      
                      <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingSix">
                          <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> What is the proceedure of laser Heart? </a> </h4>
                        </div>
                        <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                          <div class="panel-body"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <aside class="col-md-3">
                    <div class="sidebar">
                      <div class="widget search-widget">
                        <h3>Search</h3>
                        <form class="search-form">
                          <input placeholder="Enter Key words" type="search"/>
                          <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                      </div>
                      <div class="widget text-widget">
                        <h3>Text Widget</h3>
                        <p>Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid  commodi consequatur quis autem.</p>
                      </div>
                      <div class="widget newsletter-widget">
                        <h3>Newsletter</h3>
                        <form class="newsletter-form">
                          <input placeholder="Enter your Email" type="email"/>
                          <button type="submit">Subscribe Now <i class="fa fa-envelope" aria-hidden="true"></i></button>
                        </form>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </section>
          </div>
        
        </>
    )
}
