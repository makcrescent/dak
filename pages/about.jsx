import React from 'react'
import Banner from '../components/Banner'
import WelcomeMessageAbout from '../components/WelcomeMessageAbout'
import WhyChooseUs from '../components/WhyChooseUs'
import OurMedicalStaff from '../components/OurMedicalStaff'
import AppointmentFaqs from '../components/AppointmentFaqs'
import Appointement from '../components/Appointement'

export default function about() {
    return (
        <>
            <Banner title="About us"/> 
            <div class="main-content"> 
                <WelcomeMessageAbout />    
                <WhyChooseUs />
    {/*  <OurMedicalStaff />*/}
                <AppointmentFaqs />
            </div>
        </>
    )
}
