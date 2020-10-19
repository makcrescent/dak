import React from 'react'
import AppointmentForm from './AppointmentForm'

export default function AppointmentFaqs() {
    return (
        <section class="app-faq">
        <div class="container">
        <div class="row">
        
        <div class="col-md-6">
          <div class="sectio-title-2">
                    <h2>Get Appointment</h2>
                  </div>
        <AppointmentForm />    
        </div>
        
        <div class="col-md-6">
        
        <div class="sectio-title-2">
                    <h2>Any FAQ’s</h2>
                  </div>
                  
                  <div class="faqs">
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
                    </div>
                  </div>
        
        </div>
        
        </div>
        </div>
        </section>
      )
}
