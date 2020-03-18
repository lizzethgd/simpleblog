import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AddPost from './components/AddPost'
import Post from './components/Post'
import EditPost from './components/EditPost'
import {randomId} from './components/randomID'
import {postsData} from './data/postsData'

const App = () => {
  const [posts, setPosts] = useState(postsData)

  const addPost = post => {
    post.id = randomId()
    const newPost = [...posts, post]
    setPosts(newPost)
  }

  const editPost = (id, editedPost) => {
    const newPosts = posts.map(post => post.id === id ? editedPost : post)
    setPosts(newPosts)
  }

  const deletePost = id => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  const postById = id => posts.find(post => post.id === id)

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
        <Route path='/posts/:id'
        component={props => 
        <Post  {...props} post={postById(props.match.params.id)} posts={posts} deletePost={deletePost}  />} 
        />
        <Route path='/editpost/:id'
        component={props => 
        <EditPost  {...props} post={postById(props.match.params.id)} editPost={editPost} />} 
        />
        <Route path='/newpost'
        component={props => 
        <AddPost {...props} addPost={addPost} />}
        />
        <Route path='/'
        component={props => 
        <LandingPage {...props} posts={posts} />}
        />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
