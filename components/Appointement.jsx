import React from 'react'
import AppointmentForm from './AppointmentForm';
//import ConsultForm from './ConsultForm';

export default function Appointement() {
    return (
        <section className="call-appointment">
        <div className="container">
          <div  className="row">
          <div className="col-md-5 pull-left">
          <div className="get-appointment">
            <h2>Consult</h2>
    {/*          <ConsultForm />*/}
          </div>
        </div>
            <div className="col-md-5 pull-right">
              <div className="get-appointment">
                <h2>Get Appointment</h2>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
        )
}
