import React, { useState } from 'react'
//import Email from '../public/js/mailscript';
//import { appointment } from '../actions/appointments';
export default function AppointmentForm() {
    
    const [values, setValues] = useState({
        name:'',
        phone:'',
        email:'',
        reason:'',
        visitDate:'',
        visitTime:'',
        description:''    
    })
    const handleAppointment = (e)=>{
      e.preventDefault()
      const user = {...values}
     // appointment(user);
      
      console.log(JSON.stringify(values))
    }
    const handleChange = name => e =>{
        setValues({...values, error: false, [name]: e.target.value})
    }
    return (
        <div id="appointment-form">
        <form onSubmit={handleAppointment}>
        <div className="app-form row">
        <div className="col-md-6">
          <input className="form-control" name="name" onChange={handleChange('name')} placeholder="Full Name *" type="text"/>
        </div>
        <div className="col-md-6">
          <input className="form-control" name="phone" onChange={handleChange('phone')} placeholder="Your Phone *" type="text"/>
        </div>
        <div className="col-md-6">
          <input className="form-control" name="email" onChange={handleChange('email')} placeholder="Your Email *" type="text"/>
        </div>
        <div className="col-md-6">
          <select name="Visit Reason *"  onChange={handleChange('reason')}>
            <option value="reason">Visit Reason</option>
            <option value="reason1">Visit Reason 1</option>
            <option value="reason2">Visit Reason 2</option>
            <option value="reason3">Visit Reason 3</option>
            <option value="reason4">Visit Reason 4</option>

          </select>
        </div>
        <div className="col-md-6">
          <div className="input-group date" id="datetimepicker1">
            <input placeholder="Date *" name="visitDate" onChange={handleChange('visitDate')} className="form-control" type="text"/>
            <span className="input-group-addon"> <i className="fab fa-calendar" aria-hidden="true"></i> </span> </div>
        </div>
        <div className="col-md-6">
          <div className="input-group date" id="datetimepicker3">
            <input placeholder="Time *" name="visitTime" onChange={handleChange('visitTime')} className="form-control" type="text"/>
            <span className="input-group-addon"> <i className="fab fa-clock" aria-hidden="true"></i> </span> </div>
        </div>
        <div className="col-md-12">
          <textarea placeholder="Extra Note" name="description" onChange={handleChange('description')}></textarea>
          <input value="Book Appointment" onClick={handleAppointment} type="submit"/>
        </div>
      </div>    

        </form>
            
        </div>
    )
}
