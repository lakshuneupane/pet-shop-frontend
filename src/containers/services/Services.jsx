import React from 'react'

import { art1, art2, art3, art4, art5, art6 } from '../../components/article/import'


import { Article } from '../../components'


import './services.css'
const Services = () => {
  return (
    <div className='servieces' id='services'>
      <div className='services-heading'>
        <h1>Our Services</h1>
        <p>We provide a wide range of products & services for pets such as food, toys, grooming supplies, and veterinary care. We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends.</p>
      </div>
      <div className='article-container'>
        <Article imgUrl={art1} title='Dog/Cat Grooming' content='We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.'/>
        <Article imgUrl={art2} title='Home Treatment' content='Our goal is to ensure pet welfare through home treatment and prompt client response.'/>
        <Article imgUrl={art3} title='Clinical Treatment' content='Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.'/>
        <Article imgUrl={art4} title='Dog/Cat Grooming' content='We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.'/>
        <Article imgUrl={art5} title='Home Treatment' content='Our goal is to ensure pet welfare through home treatment and prompt client response.'/>
        <Article imgUrl={art6} title='Clinical Treatment' content='Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.'/>
      </div>
    </div>
  )
}

export default Services