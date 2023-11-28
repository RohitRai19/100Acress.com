import React from 'react'
import './Luxusury.css'
import {Grandlux,SCO,Commerical} from '../../Images/image'
function Luxusury({title,subtitle}) {
  const Lux=[{src:Grandlux},{src:SCO},{src:Commerical}]
  return (
    <div className='Luxusuries'>
        <h1 className='topHeading'>{title}title</h1>
        <span className='topSubHeading'>{subtitle} subtitle</span>
        <div className='lux-prop'>
            {Lux.map((image,index)=>(<div>
              <img src={image.src} alt={`image${index+1}`}/>
            </div>))}
        </div>
        <div className="lux-text">
            <p>Residential</p>
            <p>Property</p>
        </div>
      
    </div>
  )
}

export default Luxusury
