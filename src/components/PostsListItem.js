import React from 'react'
import PropTypes from 'prop-types'

const PostsListItem = ({ post }) => {
  const { id, title, category, content } = post
  return (
    <div className='posts_list_item' key={id}>
       <h3>{title}</h3>
        <h3>{category}</h3>
    </div>
  )
}

PostsListItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostsListItem