import React from 'react'
import { withRouter } from 'next/router';
import Banner from '../../components/Banner'
import {list} from '../../actions/blog'
import BlogCard from '../../components/BlogCard'

const Blogs = ({blogs, router})=> {
  console.log("blogs : "+blogs.length)
    return (
        <>
            <Banner title="Blog"/> 
            <div className="main-content">
    <section className="news">
      <div className="container">
        <div className="row"> 
          {blogs.map(blog=>
            <div key={blog._id} className="col-md-4 col-sm-4">
              <BlogCard blog={blog} />
            </div>
          )}
          
        </div>
        
        <div className="row">
        
        <div className="cp-pagination">
    
    <nav aria-label="Page navigation">
  <ul className="pagination">
    <li>
      <a href="#" aria-label="Previous">
        Prev
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        Next
      </a>
    </li>
  </ul>
</nav>
    
    </div>
        
        </div>
        
        
      </div>
    </section>
  </div>

        </>
    )
}
Blogs.getInitialProps = () => {
  return list().then(data => {
      if (data.error) {
          console.log(data.error);
      } else {
          return {
              blogs: data
          };
      }
  });
};
export default withRouter(Blogs)