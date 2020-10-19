import React from 'react'

export default function WelcomeMessageAbout() {
    return (
        <section className="welcome-section">
        <div className="container">
          <div className="row">
            <div className="welcome-box  m0">
              <div className="col-md-6">
                <div className="welcome-img"> <img src="/images/welcome.jpg" alt=""/> </div>
              </div>
              <div className="col-md-6">
                <div className="welcome-text">
                  <div className="sectio-title-2"> <strong>Welcome to your</strong>
                    <h2>Heart Care</h2>
                  </div>
                  <p> The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero  dolorem nesciunt officia facere perspiciatis fugiat.</p>
                  <p>Sapiente accusamus repudiandae architecto corporis aspernatur. Eligendi, accusamus quas mollitia. Obcaecati nam provident molestias aut aperiam qui ut similique odit natus nihil.</p>
                  <strong className="signature">Jam Doe</strong>
                  <h6 className="designation">MS Heart Care Hospital</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}
