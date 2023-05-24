import React, { useState } from 'react';
import WorkA from '../API/WorkA';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faArrowRight ,faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import BlogPost from './BlogPost';
const Blog = () => {
  const [workdata] = useState(WorkA);

  return (
    <div className='blog-section'>
    <div className='blog-head-section'>
      <div className='blog-title'>
          <h1>Our Blog</h1>
      </div>
    </div>
      <div className='blog-grid'>
      <div className='container'>
        <div className='row'>
          {workdata.map((curElem , id) => {
            const {  img, title, date, info, main ,second } = curElem;
            return (
              <div class="col-sm-12 col-md-6 col-lg-4 mt-20">
            <div class="post-item">
              <div class="post__img " >
                <a href="/">
                  <img   loading="lazy" src={img} alt="blog image" />
                </a>
              </div>
              <div class="post__body">
                <div class="post__meta-cat">
                  <a href="/">{main}</a><a href="/">{second}</a>
                </div>
                <h4 class="post__title"><a href="/">{title}</a>
                </h4>
                <div class="post__meta">
                  <span class="post__meta-date">{date}</span>
                </div>
                <p class="post__desc">{info}
                </p>
                {/* <Link to={<BlogPost/>} class="btn btn__secondary btn__link">
                  <span>Read More</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link> */}
              </div>
            </div>
          </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;