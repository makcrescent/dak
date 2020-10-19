import React, {useState} from 'react'
import { createComment } from '../actions/comments'

const CommentForm = ({blog, handleCommentForm})=> {
    const [values, setValues] = useState({
        name : 'Aslam',
        email: '',
        message:'',
        blog:blog
    })
    const {name, email, message} = values
    const handleSubmit = e =>{
        e.preventDefault()
        handleCommentForm(values)
    }
    const handleChange = name => e =>{
        setValues({...values, [name]:e.target.value})
    }

    return (
        <div className="comment-form">
        <h3>Leave Your Comments</h3>
        <div className="row">
        <form onSubmit={handleSubmit}>
         <div className="col-md-6">
            <div className="input-group">
              <input type="text" onChange={handleChange('name')} value={name} className="form-control" placeholder="Full Name"/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <input type="email" className="form-control" value={email} onChange={handleChange('email')} placeholder="Email"/>
            </div>
          </div>
          
          <div className="col-md-12">
            <div className="input-group">
              <textarea onChange={handleChange('message')} value={message}/>
            </div>
            <input type="submit" value="Submit Now"/>
          </div>
          </form>
        </div>
      </div>    )
}

export default CommentForm