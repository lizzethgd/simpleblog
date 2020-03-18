import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Post = ({ post, deletePost, history}) => {
 
  const {id, title, category, content} = post
  
  return (
    <div className='' key={id}>
            <NavLink className='button' to='/' key={id} >Back to posts</NavLink>
            <h4>Title: {title}</h4>
            <h4>Category: {category}</h4>
            <p>{content}</p>
            <button className='button' onClick={() => ( deletePost(id), history.push('/'))}>Delete</button>
            <NavLink className='button' to={`/editpost/${id}`} key={id} >Edit</NavLink>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
