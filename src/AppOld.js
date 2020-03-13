import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Prompt,
  Redirect
} from 'react-router-dom'
import NewPost from './components/NewPost'
import PostNumber from './components/PostNumber'
import {postsData} from './components/postsData'
import './App.css';


class App extends Component {

  state = {
    post: {
      title: '',
      category: '',
      text: ''
    },
    posts: posts
 
  }
  /*handleChange = e => {
    const { name, value } = e.target

      const post = {
        ...this.state.post,
        [name]: value,
        id: this.state.posts.length + 1
      }

      this.setState({ post })
  }

  handleSubmit = e => {
    e.preventDefault()

      this.setState({ posts: [...this.state.posts, this.state.post] })
    }

    deletePost = id => {
      const posts = this.state.posts.filter(post => id !== post.id)
      this.setState({ posts: posts })
    }
*/
  
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
      
      <BrowserRouter>
        <div className='simplePost'>
        <NavLink className='button' to='/postnumber'  >Post Number</NavLink>
        <NavLink className='button' to='/newpost'>Add Post</NavLink>
          <NavLink className='button' to='/' exact>Home</NavLink>
          <div className='posts'>{postsList}</div>
         
        </div>
          <Switch>
          <Route path='/' exact />
          <Route path='/newpost' component={NewPost} />
          <Route path='/postnumber' component={PostNumber} />
          </Switch>
          
      </BrowserRouter>
    )
  }
}

export default App;
//activeStyle={{ color: 'orange' }}