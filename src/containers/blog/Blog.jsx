import React from 'react'

import {blog1, blog2, blog3} from '../../components/blogs/import'

import Blogs from '../../components/blogs/Blogs'

import './blog.css'

const Blog = () => {
  return (
    <div className='Blog'>
      <div className='blog-heading'>
        <h1>Our Blogs</h1>
      </div>
      <div className='blog-container'>
        <Blogs imgUrl={blog1} title='How to Choose the Right Bully Stick for Your Dog' content='Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.' />
        <Blogs imgUrl={blog2} title='Saving Lives: Animal House Shelter And Downtown Pet Supply' content='Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.' />
        <Blogs imgUrl={blog3} title='Himalayan Yak Chews: 11 Benefits You Need To Know' content='Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.' />
      </div>
    </div>
  )
}

export default Blog