import React from 'react'
import './Luxusury.css'
import {Grandlux,SCO,Commerical} from '../../Images/image'
function Luxusury({title,subtitle}) {
  const Lux=[{src:Grandlux,title:"Residential",subtitle:"PROPERTY"},{src:SCO,title:"SCO",subtitle:"PLOTS"},{src:Commerical,title:"Commercial",subtitle:"PROPERTY"}]
  return (
    <div className='Luxusuries'>
        <h1 className='topHeading'>{title}</h1>
        <span className='topSubHeading'>{subtitle}</span>
        <div className='lux-prop'>
            {Lux.map((image,index,)=>(<div className='image-container'>
              <div className='imagediv'>
              <img src={image.src} alt={`image${index+1}`}/>
              </div>
             
              <div className="lux-text">
                <div className='Lux-title'>{image.title}</div>
                  <div className='Lux-subtitle'>{image.subtitle}</div>
                  <div className='View-Property'>View Property</div>
                    </div>
            </div>))}
        </div>

      
    </div>
  )
}

export default Luxusury
