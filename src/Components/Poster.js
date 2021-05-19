import React from 'react';


import '../Style/Poster.css'


const poster = {
    "height":"100vh",
    
    "backgroundImage":'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("/images/slider3.jpg")',
    "backgroundSize":"cover"
}
const Poster = (props)=>{
   const {title} = props
    return(
        <div style={poster}>
            <div className="parent">
                  <div className="child">
                  <div className='role'>
                            <h2 className="letters">{title}</h2>
                    </div>
                    
                    
                  </div>
            </div>
        </div>
    )
}

export default Poster;