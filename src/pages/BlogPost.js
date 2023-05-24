import React from 'react'

const BlogPost = () => {
  return (
    <section className="blog blog-single pt-0 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="post-item mb-0">
              <div className="post__img">
                <a href="/">
                  <img    loading="lazy" src={require('../img/background-b.webp')} alt="blog image" / >
                </a>
              </div>
              <div className="post__meta d-flex align-items-center mb-20">
                <span className="post__meta-date">Jan 20, 2020</span>
                <div className="post__meta-cat">
                  <a href="/">Consulting</a><a href="/">Sales</a>
                </div>
                <span className="post__meta-author"><span className="color-secondary">By:</span>
                  <a href="/">Mike Dooley</a>
                </span>
              </div>
              <h1 className="post__title mb-30">
                Five Ways to Develop a World Sales Operations Function
              </h1>
              <div className="post__desc">
                <p>Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work
                  policies if you didn’t already have one. But there are ways to make the remote-work experience
                  productive and engaging — for employees and the organization.</p>
                <p> “At most organizations, scenario planning focuses on the necessary operational responses to ensure
                  business continuity. Few of these plans address the ability or bandwidth of employees to focus on
                  their work,” says Brian Kropp, Distinguished Vice President, Research, Gartner.</p>
                <p>Use both direct conversations and indirect observations to get visibility into employees’ challenges
                  and concerns. Use every opportunity to make clear to employees that you support and care for them. To
                  facilitate regular conversations between managers and employees, provide managers with guidance on how
                  best to broach sensitive subjects arising from the COVID-19 pandemic, including alternative work
                  models, job security and prospects, impact on staffing and tension in the workplace.</p>
                <p>Make sure employees have the technology they need to be successful, which may be more than just a
                  mobile phone and laptop. For example, if you expect employees to attend virtual meetings, do they have
                  adequate cameras?</p>
                <p>Even if you don’t have an extensive set of technology and collaborative tools available, you can
                  equip employees to function effectively when remote. But don’t just assume that people know how to
                  operate with virtual communications — or are comfortable in that environment. </p>
              </div>
            </div>
            <div className="bordered-box mb-40">
              <div className="row row-no-gutter">
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
                  <div className="blog-tags d-flex flex-wrap">
                    <strong className="mr-20 color-heading">Tags</strong>
                    <ul className="list-unstyled d-flex flex-wrap mb-0">
                      <li><a href="/">Consulting</a></li>
                      <li><a href="/">Tech</a></li>
                      <li><a href="/">Employee</a></li>
                      <li><a href="/">Organization</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="blog-share d-flex flex-wrap justify-content-end">
                    <strong className="mr-20 color-heading">Share</strong>
                    <ul className="list-unstyled social-icons social-icons-primary d-flex mb-0">
                      <li><a href="https://www.facebook.com/konzeptsolutions/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="https://www.facebook.com/konzeptsolutions/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="https://www.instagram.com/konzeptsolutions/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="https://twitter.com/konzeptsolution" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-nav d-flex justify-content-between mb-40">
              <a href="/" className="widget-nav__prev d-flex flex-wrap">
                <div className="widget-nav__img">
                  <div className="widget-nav__overlay"></div>
                  <img    loading="lazy" src="images/blog/grid/4.jpg" alt="blog thumb"/>
                </div>
                <div className="widget-nav__content">
                  <span>Previous Post</span>
                  <h5 className="widget-nav__ttile mb-0">Succession Risks Threaten Leadership Strategy</h5>
                </div>
              </a>
              <a href="/" className="widget-nav__next d-flex flex-wrap">
                <div className="widget-nav__img ">
                  <div className="widget-nav__overlay"></div>
                  <img    loading="lazy" src="images/blog/grid/6.jpg" alt="blog thumb"/>
                </div>
                <div className="widget-nav__content">
                  <span>Next Post</span>
                  <h5 className="widget-nav__ttile mb-0">Employee Engagement Surveys Tell About Employee?</h5>
                </div>
              </a>
            </div>
            <div className="blog-author d-flex flex-wrap mb-70">
              <div className="blog-author__avatar">
                <img    loading="lazy" src="images/blog/author/1.jpg" alt="avatar"/>
              </div>
              <div className="blog-author__content">
                <h6 className="blog-author__name">Mahmoud Baghagho</h6>
                <p className="blog-author__bio">Founded by Begha over many cups of tea at her kitchen table in 2009, our
                  brand promise is simple: to
                  provide powerful digital marketing solutions to small and medium businesses.</p>
                <ul className="social-icons list-unstyled mb-0">
                  <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="/"><i className="fab fa-vimeo-v"></i></a> </li>
                  <li><a href="/"><i className="fab fa-linkedin"></i></a> </li>
                </ul>
              </div>
            </div>
            <div className="blog-comments mb-70">
              <h5 className="blog-widget__title">2 comments</h5>
              <ul className="comments-list list-unstyled">
                <li className="comment__item">
                  <div className="comment__avatar">
                    <img    loading="lazy" src="images/blog/author/2.jpg" alt="avatar"/>
                  </div>
                  <div className="comment__content">
                    <h5 className="comment__author">Richard Muldoone</h5>
                    <span className="comment__date">Feb 28, 2017 - 08:07 pm</span>
                    <p className="comment__desc">The example about the mattress sizing page you mentioned in the last WBF
                      can be a perfect example
                      of new keywords and content, and broadening the funnel as well. I can only imagine the sale
                      numbers if that was the site of a mattress selling company.</p>
                    <a className="comment__reply" href="/">reply</a>
                  </div>
                  <ul className="nested__comment list-unstyled">
                    <li className="comment__item">
                      <div className="comment__avatar">
                        <img   loading="lazy" src="images/blog/author/3.jpg" alt="avatar"/>
                      </div>
                      <div className="comment__content">
                        <h5 className="comment__author">Mike Dooley</h5>
                        <span className="comment__date">Feb 28, 2017 - 08:22 pm</span>
                        <p className="comment__desc">The example about the mattress sizing page you mentioned in the last
                          WBF can be a perfect
                          example of new keywords and content, and broadening the funnel as well. I can only imagine the
                          sale numbers if that was the site of a mattress selling company.</p>
                        <a className="comment__reply" href="/">reply</a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="blog-widget blog-comments-form mb-30">
              <h5 className="blog-widget__title">Leave A Reply</h5>
              <form>
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name:"/>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email:"/>
                    </div>
                  </div>                 <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Website:"/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Comment"></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap align-items-center">
                    <button type="submit" className="btn btn__primary btn__icon justify-content-between btn__xl">
                      <span>Submit Comment</span><i className="icon-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <aside className="sidebar">

              <div className="widget widget-posts">
                <h5 className="widget__title">Recent Posts</h5>
                <div className="widget__content">
                  
                  <div className="widget-post-item d-flex align-items-center">
                    <div className="widget-post__img">
                      <a href="/"><img    loading="lazy" src="images/blog/grid/2.jpg" alt="thumb"/></a>
                    </div>
                    <div className="widget-post__content">
                      <span className="widget-post__date">Sep 19, 2020</span>
                      <h4 className="widget-post__title"><a href="/">Succession Risks That Threaten Your Leadership</a>
                      </h4>
                    </div>
                  </div>
                  
                  <div className="widget-post-item d-flex align-items-center">
                    <div className="widget-post__img ">
                      <a href="/"><img    loading="lazy" src="images/blog/grid/3.jpg" alt="thumb"/></a>
                    </div>
                    <div className="widget-post__content">
                      <span className="widget-post__date">July 7, 2020</span>
                      <h4 className="widget-post__title"><a href="/">Do Employee Surveys Tell About Employee?</a>
                      </h4>
                    </div>
                  </div>
                                    <div className="widget-post-item d-flex align-items-center">
                    <div className="widget-post__img">
                      <a href="/"><img    loading="lazy" src="images/blog/grid/6.jpg" alt="thumb"/></a>
                    </div>
                    <div className="widget-post__content">
                      <span className="widget-post__date">March 13, 2020</span>
                      <h4 className="widget-post__title"><a href="/">Succession Risks That Threaten Your Leadership</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget-categories">
                <h5 className="widget__title">Categories</h5>
                <div className="widget-content">
                  <ul className="list-unstyled mb-0">
                    <li><a href="/"><span>IT Management</span><span className="cat-count">9</span></a></li>
                    <li><a href="/"><span>Cyber Security</span><span className="cat-count">2</span></a></li>
                    <li><a href="/"><span>Cloud Computing</span><span className="cat-count">5</span></a></li>
                    <li><a href="/"><span>IT Consulting</span><span className="cat-count">1</span></a></li>
                    <li><a href="/"><span>Software Dev</span><span className="cat-count">7</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="widget widget-tags">
                <h5 className="widget__title">Tags</h5>
                <div className="widget-content">
                  <ul className="list-unstyled mb-0">
                    <li><a href="/">Insights</a></li>
                    <li><a href="/">Industry</a></li>
                    <li><a href="/">Modern</a></li>
                    <li><a href="/">Corporate</a></li>
                    <li><a href="/">Business</a></li>
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
