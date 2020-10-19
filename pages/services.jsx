import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'

export default function services() {
    return (
        <>
            <Banner title="Services"/> 
            <div class="main-content"> 
                <Services />
            </div>
        </>
    )
}
