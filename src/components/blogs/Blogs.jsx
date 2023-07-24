import React from "react";

import './blogs.css'

const Blogs = ({imgUrl, title, content}) => {
  return (
      <div className="blogs">
        <div className="blogs-image">
          <img src={imgUrl} alt="blogs" />
        </div>
        <div className="blogs-content">
          <div className="blogs-title">
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
          <button>View Detail</button>
        </div>
      </div>
  );
};

export default Blogs;
