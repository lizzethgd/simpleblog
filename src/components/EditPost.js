import React, { useState } from 'react'

const EditPost= ({ addPost, post, history }) => {
    const initialState = {
        id: post.id,
        title: post.title,
        category: post.category,
        content: post.content
      }
  
  const [formData, setFormData] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target
    const newData = { ...formData, [name]: value }
    setFormData(newData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addPost(formData)
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

export default EditPost
