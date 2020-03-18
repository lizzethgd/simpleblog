import React, { useState } from 'react'
import PropTypes from 'prop-types'

const EditPost= ({ post, editPost, history }) => {

  const { id, title, category, content } = post

    const initialState = {
        id : id,
        title: title,
        category: category,
        content: content
      }
  
  const [formData, setFormData] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target
    const editedPost = { ...formData, [name]: value }
    setFormData(editedPost)
    console.log(formData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    editPost(id,formData)
    history.push('/posts')
  }

  const handleCancel = () => {
    history.push('/')
}

  return (
    <form onSubmit={handleSubmit} >
      <div>
      <label>
         Title:
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={formData.title}
          onChange={handleChange}
         />
       </label>
      </div>
      <div>
      <label>
         Category:
        <input
          type='text'
          name='category'
          placeholder='Category'
          value={formData.category}
          onChange={handleChange}
        />
        </label>
      </div>
      <div>
      <label>
         Write New Post:
        <textarea
          type='text'
          name='content'
          placeholder='Content'
          value={formData.content}
          onChange={handleChange}
        />
        </label>
      </div>
      <div>
        <button className='button'>Save</button><button className='button' onClick={handleCancel}>Cancel</button>
      </div>
      
    </form>
  )
}

EditPost.propTypes = {
  post: PropTypes.object.isRequired
}

export default EditPost
