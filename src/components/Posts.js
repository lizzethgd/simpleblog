import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PostsList from './PostsList'
import PropTypes from 'prop-types'
import '../App.css'

const Posts = ({ posts }) => {
  const postsList = posts.map(post =>  <NavLink to='/post'><PostsList post={post} /></NavLink>)
  return (
    <>
     <div className='post'> <h1>Blog Posts</h1>
    <NavLink className='button' to='/addpost'>Add Post</NavLink></div>
      <div className='posts'>{postsList}</div>
    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
