import React from 'react'
import { NavLink } from 'react-router-dom'
//import PostsListItem from './PostsListItem'
import PropTypes from 'prop-types'
import '../App.css'

const LandingPage =  ({ posts }) => {
  const postsList = posts.map(post =>  
  <NavLink to={`/posts/${post.id}`} key={post.id}>
   <div className='posts_list_item' >
       <h3>{post.title}</h3>
        <h3>{post.category}</h3>
    </div>
  </NavLink>)
  return (
    <>
     <div className='posts_list_item'> <h1>Blog Posts</h1>
    <NavLink className='button landing' to='/newpost'>Add Post</NavLink></div>
      <div className='posts_list'>{postsList}</div>
    </>
  )
}

LandingPage.propTypes = {
  posts: PropTypes.array.isRequired
}

export default LandingPage