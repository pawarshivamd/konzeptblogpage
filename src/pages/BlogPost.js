import React from 'react'

const BlogPost = () => {
  return (
    <section className="blog blog-single pt-0 pb-80 mt-20">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="post-item mb-0">
              <div className="post__img">
                <a href="/">
                  <img    loading="lazy" src={require('../img/new.jpg')} alt="blog image" / >
                </a>
              </div>
              <div className="post__meta d-flex align-items-center mb-20">
                <span className="post__meta-date">Dec 31, 2021</span>
                <div className="post__meta-cat">
                  <a href="/">newYear, Welcome, 2022</a>
                </div>
              
              </div>
              <h1 className="post__title mb-30">
              Welcome To 2022 Year
              </h1>
              <div className="post__desc">
                <p>The New Year is fast approaching and celebrations are flowing in everywhere every minute. At the end of 2021, people are gearing up to make new promises and new beginnings for 2022. It’s time to make New Year’s resolutions that will help people achieve their goals</p>
                
              </div>
            </div>
     
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar">

              <div className="widget widget-posts">
                <h5 className="widget__title">Recent Posts</h5>
                <div className="widget__content">
                  
                  <div className="widget-post-item d-flex align-items-center">
                    <div className="widget-post__img">
                      <a href="/"><img    loading="lazy" src={require('../img/new.jpg')} alt="thumb"/></a>
                    </div>
                    <div className="widget-post__content">
                      <span className="widget-post__date">Dec 31, 2021</span>
                      <h4 className="widget-post__title">Welcome To 2022 Year
                      </h4>
                    </div>
                  </div>
                  
                
                </div>
              </div>
            
              <div className="widget widget-tags">
                <div className="widget-content">
                <h5 className="widget__title">Tags</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="/">NewYear</a></li>
                    <li><a href="/">Welcome</a></li>
                    <li><a href="/">2022</a></li>
  
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost
