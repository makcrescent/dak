import React from 'react'
import SocialIcons from './SocialIcons'

export default function HeaderTopBar() {
    const icons = ['twitter', 'facebook', 'google-plus','instagram','youtube']
    return (
        <div className="top-bar">
        
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-8">
              <ul>
                <li><i className="fa fa-phone" aria-hidden="true"></i> Call at: <strong>+222 4321 762</strong></li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i> Email us: <strong>info@heartcare.com</strong></li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-4 top-social"> 
                <SocialIcons icons={icons}/>
            </div>
          </div>
        </div>
      </div>
    )
}
