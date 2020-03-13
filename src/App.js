import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AddPost from './components/AddPost'
import Post from './components/Post'
import EditPost from './components/EditPost'
//import {randomId} from './components/randomID'

const App = () => {
  const [posts, setPosts] = useState([])
  const addPost = post => {
    post.id = posts.length+1
   
    const newPost = [...posts, post]
    setPosts(newPost)
  }

  const postById = id => posts.find(post => post.id === post.id)
 
  const deletePost = id => {
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts )
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
        <Route path="/post/:id" 
        component={props => <Post  {...props} post={postById(props.match.params.id)} deletePost={deletePost}  />} 
        />
        <Route path="/editpost/:id" 
        component={props => <EditPost  {...props} post={postById(props.match.params.id)}  />} 
        />
        <Route path='/addpost'
        component={props => <AddPost {...props} addPost={addPost} />}
        />
        <Route path='/'
        component={props => <LandingPage {...props} posts={posts} />}
        />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
//setPosts={setPosts}
 //path='/post/:id'
 /*  <Route
            path='/addpost'
            component={props => <AddPost {...props} addPost={addPost} />}
          />
           <Route
            path='/post/:id'
            component={props => <Post {...props} post={postById(props.match.params.id)} posts={posts}  />}
          />
          <Route
            path='/posts'
            component={props => <Posts {...props} posts={posts} />}
          />*/