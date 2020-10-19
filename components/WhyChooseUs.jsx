import React from 'react'

export default function WhyChooseUs() {
    return (
        <section class="why-choose">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="sectio-title-2"> <strong>Read What Says Our</strong>
                <h2>Why Choose us</h2>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="cp-tabs"> 
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Heart Diseases</a></li>
                  <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Heart Condition</a></li>
                  <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Heart Heart</a></li>
                </ul>
                
                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" id="home"> Our commercialization strategy involves a rapid development of treatments for both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed.Both rotator cuff injuries in the shoulder and meniscus injuries of the knee joint, with an initial focus on the highly developed. </div>
                  <div role="tabpanel" class="tab-pane" id="profile"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </div>
                  <div role="tabpanel" class="tab-pane" id="messages"> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition. </div>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="video-thumb gallery"> <a class="play" href="https://vimeo.com/136143356" data-rel="prettyPhoto" title="Vimeo video"> <i class="fa fa-play" aria-hidden="true"></i></a> <img src="images/video-thumb.png" alt=""/></div>
            </div>
          </div>
        </div>
      </section>

    )
}
