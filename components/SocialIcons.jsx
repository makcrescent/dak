import React from 'react'

export default function SocialIcons({icons}) {
    return (
        <div>
        {icons.map(icon=>(
            <a href="#"><i className= {`fab fa-${icon}`} aria-hidden="true"></i></a> 
        ))}
        
        </div>
    )
}
