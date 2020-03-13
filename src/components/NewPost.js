import React, { Component} from 'react'
import {postsData} from './postsData'
//import validator from 'validator'


//const Feedback = props => <p style={{ color: 'red' }}>{props.error}</p>

class NewPost extends Component {
  state = {
    post: {
      title: '',
      category: '',
      text: ''
    },
    posts: posts
    /*,touched: {
      title: false,
      category: false,
      text: false
    }*/
  }

handleChange = e => {
    const { name, value } = e.target

      const post = {
        ...this.state.post,
        [name]: value,
        id: this.state.posts.length + 1
      }

      this.setState({ post })
  }

  /*handleBlur = e => {
    const { name } = e.target

    this.setState({
      touched: { ...this.state.touched, [name]: true }
    })

    console.log('Blurring')
  }

  validate = () => {
    const errors = {
      title: '',
      category: '',
      text: ''
    }
    if (
      this.state.touched.title &&
      !validator.isLength(this.state.title , { min: 5, max: 24 })
    ) {
      errors.title = 'Title must be between  and 24 characters'
    }
    if (
      this.state.touched.category &&
      !validator.isLength(this.state.category, { min: 3, max: 15 })
    ) {
      errors.category = 'Category must be between  and 15 characters'
    }
    if (
        this.state.touched.text &&
        !validator.isLength(this.state.text, { min: 10, max: 800 })
      ) {
        errors.text = 'Text must be between 10 and 800 characters'
      }

    return errors
  }*/

  handleSubmit = e => {
    e.preventDefault()
    /*const {
      title,
      category,
      text
    } = this.state

    const data = {
        title,
        category,
        text
      }*/
     
      this.setState({ posts: [...this.state.posts, this.state.post] })
    }
      render() {
        const { posts } = this.state
    console.log(posts)
    const postsList = posts.map((post, i) => (
      <div className='post' key={post.id}>
        <div>
          {post.title}
        </div>
        <div>
        {post.category}
        </div>
      </div>
    ))
    const { title, category, text } = this.state.post
        //const errors = this.validate()
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
            <div>
            <input
              type='text'
              name='title'
              value={title}
              onChange={this.handleChange}
              //onBlur={this.handleBlur}
              placeholder='Title'
            />
            {/*errors.title ? <Feedback error={errors.title} /> : ''*/}
            </div>
            <div>
            <input
              type='text'
              name='category'
              value={category}
              onChange={this.handleChange}
              //onBlur={this.handleBlur}
              placeholder='Category'
            />
            {/*errors.category ? <Feedback error={errors.category} /> : ''*/}
          </div>
          <div>
            <textarea
              type='text'
              name='text'
              value={text}
              onChange={this.handleChange}
              //onBlur={this.handleBlur}
              placeholder='text'
            />
            {/*errors.text ? <Feedback error={errors.text} /> : ''*/}
          </div>
          <button>Save</button> 
            </form>
            <div className='posts'>{postsList}</div>
            </div>
        )
      }
    }



  export default NewPost