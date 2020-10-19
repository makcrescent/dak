import React from 'react'

export default function Blog() {
    return (
        <section className="news-posts">
        <div className="container">
          <div className="row">
            <div className="section-title-3"> <strong>Our News</strong>
              <h2>Blog</h2>
            </div>
          </div>
          <div className="row"> 
            <div className="col-md-4 col-sm-4">
              <div className="news-box">
                <div className="news-thumb"> <a href="news-details.html" className="view"><i className="fa fa-heartbeat" aria-hidden="true"></i></a> <img src="images/news1.jpg" alt=""/></div>
                <div className="news-content">
                  <div className="post-date">08 Sep</div>
                  <div className="post-text">
                    <h5><a href="news-details.html">Hearts are Natural Gift by God</a></h5>
                    <ul className="post-meta">
                      <li><a href="#">by Jam Doe</a></li>
                      <li><a href="#">47 Comments</a></li>
                    </ul>
                    <p>The Heart Care Heart Hospital have latest technology machines with experty.</p>
                    <a className="read-more" href="news-details.html">Read More</a> </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="news-box">
                <div className="news-thumb"> <a href="news-details.html" className="view"><i className="fa fa-heartbeat" aria-hidden="true"></i></a> <img src="images/news2.jpg" alt=""/></div>
                <div className="news-content">
                  <div className="post-date">08 Sep</div>
                  <div className="post-text">
                    <h5><a href="news-details.html">You will have 100% Heart</a></h5>
                    <ul className="post-meta">
                      <li><a href="#">by Jam Doe</a></li>
                      <li><a href="#">47 Comments</a></li>
                    </ul>
                    <p>The Heart Care Heart Hospital have latest technology machines with experty.</p>
                    <a className="read-more" href="news-details.html">Read More</a> </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="news-box">
                <div className="news-thumb"> <a href="news-details.html" className="view"><i className="fa fa-heartbeat" aria-hidden="true"></i></a> <img src="images/news3.jpg" alt=""/></div>
                <div className="news-content">
                  <div className="post-date">08 Sep</div>
                  <div className="post-text">
                    <h5><a href="news-details.html">Lastest Equipments Treatment</a></h5>
                    <ul className="post-meta">
                      <li><a href="#">by Jam Doe</a></li>
                      <li><a href="#">47 Comments</a></li>
                    </ul>
                    <p>The Heart Care Heart Hospital have latest technology machines with experty.</p>
                    <a className="read-more" href="news-details.html">Read More</a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
