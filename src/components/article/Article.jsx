import React from 'react'
import './article.css'


const Article = ({imgUrl, title, content}) => {
  return (
    <div className='article'>
        <div className='article-image'>
            <img src={imgUrl} alt="article1" />
        </div>
        <div className='article-content'>
            <div className='content-title'>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <button>View More</button>
        </div>
    </div>
  )
}

export default Article