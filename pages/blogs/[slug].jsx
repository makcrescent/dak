import React, {useState} from 'react'
import { withRouter } from 'next/router'
import renderHTML from 'react-render-html';
import { singleBlog2 } from './../../actions/blog';
import { createComment } from '../../actions/comments';
import Banner from './../../components/Banner';
import {API} from '../../config'
import moment from 'moment'
import Comments from './../../components/Comments';
import CommentForm from './../../components/CommentForm';

const SingleBlog =({blog, query})=> {
    const { title, body, slug, postedBy, createdAt } = blog
    const [values, setValues] = useState({
        comments: blog.comments,
        reload: false
    })
    const {comments, reload} = values
    const showComments = (comments)=>{
        return <Comments comments = {comments}/>
    }
    const handleCommentForm = (data)=>{
        //setValues({...values, reload:!reload})
        createComment(data).then(response=>{
            if(response.error){
                console.log('cannot saved comments due to some error')
            }else{
                console.log(JSON.stringify(response))
                setValues({...values, reload:!reload})
            }
        })
     //   alert('recieved'+JSON.stringify(data))
    }
    return (
        <>
        <Banner title="Blog Details"/> 
        <div className="main-content">
        <section className="news-details">
          <div className="container">
            <div className="row"> 
              <div className="col-md-9">
                <div className="news-detail">
                  <div className="news-box">
                    <div className="news-thumb">
                      <div className="date"> <strong>{moment(createdAt).format('DD')}</strong> {moment(createdAt).format('MMMM')} </div>
                      <img src={`${API}/blog/photo/${slug}`} alt=""/>
                    </div>
                    <div className="news-content">
                      <ul className="post-meta">
                        <li><i className="fa fa-user" aria-hidden="true"></i> by {postedBy.username}</li>
                        <li><i className="fa fa-comment" aria-hidden="true"></i> 47 Comments</li>
                        <li><i className="fa fa-heart" aria-hidden="true"></i> 356 Likes</li>
                      </ul>
                      
                      {renderHTML(body)}
                      <div className="share">
                        <ul>
                          <li><strong> Share News : </strong></li>
                          <li><a href="#" className="tw"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                          <li><a href="#" className="fb"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                          <li><a href="#" className="gp"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>
                          <li><a href="#" className="insta"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                          <li><a href="#" className="ytp"><i className="fab fa-youtube" aria-hidden="true"></i></a> </li>
                        </ul>
                      </div>
                     {/* comments && showComments(comments)*/}
    {/*<Comments comments={blog.comments?blog.comments:null}/>*/}
                      <CommentForm blog={blog._id} handleCommentForm={handleCommentForm}/>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
              <aside className="col-md-3">
                <div className="sidebar">
                  <div className="widget search-widget">
                    <h3>Search</h3>
                    <form className="search-form">
                      <input type="search" placeholder="Enter Key words"/>
                      <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                  </div>
                  <div className="widget text-widget">
                    <h3>Text Widget</h3>
                    <p>Enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid  commodi consequatur quis autem.</p>
                  </div>
                  <div className="widget">
                    <h3>Recent Posts</h3>
                    <ul className="recent-posts">
                      <li>
                        <div className="thumb"><img src="/images/rn1.jpg" alt=""/></div>
                        <div className="post-content">
                          <h6><a href="#">Three Easy Steps to Move from Fear to Confidence</a></h6>
                          <ul className="post-meta">
                            <li><i className="fa fa-calendar"></i> 29 Apr, 2017</li>
                            <li><i className="fa fa-user"></i><a href="#"> Aller Doe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="thumb"><img src="/images/rn2.jpg" alt=""/></div>
                        <div className="post-content">
                          <h6><a href="#">Three Easy Steps to Move from Fear to Confidence</a></h6>
                          <ul className="post-meta">
                            <li><i className="fa fa-calendar"></i> 29 Apr, 2017</li>
                            <li><i className="fa fa-user"></i><a href="#"> Aller Doe</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="thumb"><img src="/images/rn3.jpg" alt=""/></div>
                        <div className="post-content">
                          <h6><a href="#">Three Easy Steps to Move from Fear to Confidence</a></h6>
                          <ul className="post-meta">
                            <li><i className="fa fa-calendar"></i> 29 Apr, 2017</li>
                            <li><i className="fa fa-user"></i><a href="#"> Aller Doe</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="widget insta-feed">
                    <h3>Instagram</h3>
                    <ul>
                      <li><img src="/images/insta1.jpg" alt=""/></li>
                      <li><img src="/images/insta2.jpg" alt=""/></li>
                      <li><img src="/images/insta3.jpg" alt=""/></li>
                      <li><img src="/images/insta4.jpg" alt=""/></li>
                      <li><img src="/images/insta5.jpg" alt=""/></li>
                      <li><img src="/images/insta6.jpg" alt=""/></li>
                    </ul>
                  </div>
                  <div className="widget archive-widget">
                    <h3>Archives</h3>
                    <ul className="archives">
                      <li>March <span>2017</span></li>
                      <li>February <span>2017</span></li>
                      <li>January <span>2017</span></li>
                      <li>December <span>2017</span></li>
                      <li>November <span>2017</span></li>
                      <li>October <span>2017</span></li>
                    </ul>
                  </div>
                  <div className="widget newsletter-widget">
                    <h3>Newsletter</h3>
                    <form className="newsletter-form">
                      <input placeholder="Enter your Email" type="email"/>
                      <button type="submit">Subscribe Now <i className="fa fa-envelope" aria-hidden="true"></i></button>
                    </form>
                  </div>
                </div>
              </aside>
              
            </div>
          </div>
        </section>
      </div>
        </>
    )
}
SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog2(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data, query };
        }
    });
};

export default withRouter(SingleBlog)