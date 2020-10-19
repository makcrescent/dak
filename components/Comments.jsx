import React from 'react'
import moment from 'moment'

const Comments = ({comments})=> {
    return (
        <div className="comments-list">
        <h3>Comments</h3>
        <ul className="comments">
          {comments && comments.map(comment =>(
            <li key={comment._id} className="comment">
                <div className="user-thumb"><img src="/images/user3.jpg" alt=""/></div>
                <div className="user-comments">
                  <h5>{comment.name}</h5>
                  <div className="date-time">{moment(comment.createdAt).format('LLLL')}<a href="#"><i className="fa fa-reply-all" aria-hidden="true"></i></a> </div>
                  <p>{comment.message}</p>
                </div>
            </li>
          ))}
          
        </ul>
      </div>
          )
}
export default Comments