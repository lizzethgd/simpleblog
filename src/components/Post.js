import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Post = ({ post, deletePost}) => {
  
  const { id, title, category, content } = post
  return (
    <div className='' key={id}>
            <h4>Title: {title}</h4>
            <h4>Category: {category}</h4>
            <p>{content}</p>
            <button className='button' onClick={() => { deletePost(id) }}>Delete</button>
            <NavLink className='button' key={id} to='/editpost/:id'>Edit</NavLink>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post
//<button onClick={() => this.deletePost(id)}>Delete</button>