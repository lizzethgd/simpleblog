import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PostsListItem from './PostsListItem'
import PropTypes from 'prop-types'
import '../App.css'

const LandingPage =  ({ posts }) => {
  const postsList = posts.map(post =>  <NavLink key={post.id} to='/post/:id'><PostsListItem post={post} /></NavLink>)
  return (
    <>
     <div className='posts_list_item'> <h1>Blog Posts</h1>
    <NavLink className='button landing' to='/addpost'>Add Post</NavLink></div>
      <div className='posts_list'>{postsList}</div>
    </>
  )
}

LandingPage.propTypes = {
  posts: PropTypes.array.isRequired
}

export default LandingPage