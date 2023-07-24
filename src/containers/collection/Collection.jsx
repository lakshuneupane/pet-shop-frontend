import React from 'react'
import './collection.css'
import Breed from '../../components/breed/Breed'

import {breed1, breed2, breed3, breed4, breed5, breed6, breed7, breed8} from '../../components/breed/import'



const Collection = () => {
  return (
    <div className='collection'>
      <div className='collection-title'>
        <h1>Our Pet Collections</h1>
        <p>"Bring joy to your home with a furry companion from our pet selection."</p>
      </div>
      <div className='breed-container'>
        <Breed imgUrl={breed1} name='Golden Retriever' gender='Male' age='2 months'/>
        <Breed imgUrl={breed2} name='Doberman' gender='Male' age='2 months'/>
        <Breed imgUrl={breed3} name='Apso' gender='Female' age='1 year'/>
        <Breed imgUrl={breed4} name='Chihuahua' gender='Female' age='1 year'/>
        <Breed imgUrl={breed5} name='Japanese Spitz' gender='Male' age='2 months'/>
        <Breed imgUrl={breed6} name='German Shepard' gender='Male' age='2 months'/>
        <Breed imgUrl={breed7} name='Husky' gender='Female' age='3 months'/>
        <Breed imgUrl={breed8} name='Pug' gender='Female' age='4 months'/>
      </div>
      <button>View All</button>
    </div>
  )
}

export default Collection