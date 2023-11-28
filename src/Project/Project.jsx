import React from 'react'

import './project.css'
function Project({Img,title,subtitle,ImageHeight}) {

  return (
    <div className='Project'>
       <div className='Project-head'><span className='Projectheading'></span>

          <div className='Gurgaon'>
          <h1 className='topHeading'>{title} </h1> 
          <span className='topSubHeading'>{subtitle}</span>
            <div className='Gurgaon-prop'>{Img.map((image,index)=>(<div key={index} className='imgdiv' style={{height:ImageHeight}}>
              <img src={image.src} alt={`Images${index+1}`}/>
              <div className='Prop-title'>
             <h3 className='title'>{image.title}</h3>
             <span className='subtitle'>{image.subtitle}</span>
              </div>
            </div>))}
            </div> 
          </div>
       
       </div>     
      
    </div>
  )
}

export default Project
