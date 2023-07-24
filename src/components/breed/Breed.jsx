import React from 'react'

import './breed.css'

const Breed = ({imgUrl, name, gender, age}) => {
  return (
    <div className='breed' id='collection'>
        <div className='breed-image'>
            <img src={imgUrl} alt="breed" />
        </div>
        <div className='breed-name'>
            <h1>{name}</h1>
            <div className='breed-detail'>
                <p>Gender: {gender}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    </div>
  )
}

export default Breed