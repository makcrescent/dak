import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import {API} from '../config'

export default function BlogCard({blog}) {
    
    const { title } = blog
    return (
        <>
        <div className="news-box mb50">
        <div className="news-thumb"> <Link href="news-details.html" className="view"><i className="fa fa-Heart" aria-hidden="true"></i></Link> 
        
         <img src="/images/default.jpg" alt=""/>
        
        </div>
        <div className="news-content">
          <div className="post-date">{moment(blog.createdAt).format('DD MMM')}</div>
          <div className="post-text">
            <h5><a href="news-details.html">{title}</a></h5>
            <ul className="post-meta">
              <li><a href="#">by {blog.postedBy.name}</a></li>
              <li><a href="#">47 Comments</a></li>
            </ul>
            <p>The Heart Care Heart Hospital have latest technology machines with experty.</p>
            <Link href={`/blogs/${blog.slug}`}><a className="read-more">Read More</a></Link> </div>
        </div>
      </div>  
        </>
    )
}
