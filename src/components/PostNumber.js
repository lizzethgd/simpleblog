import React, { Component} from 'react'
import {postsData} from './postsData'

class PostNumber extends Component {
    state = {
      post: {
        id: 0,  
        title: '',
        category: '',
        text: ''
      },
      posts: posts
     
    }
    componentDidMount (){
       
        const post = this.state.posts.filter(post => post.id === 1)
        console.log(post)
        this.setState({ post: post })
        console.log(this.state.post)
    }


    
        deletePost = id => {
            const posts = this.state.posts.filter(post => id !== post.id)
            this.setState({ posts: posts })
          }
        
        render() {
            const {id, title, category, text} = this.state.post
            return (
               <div key={id}>
                <button onClick={() => this.deletePost(id)}>Delete</button>
                <h3>Title: {title}</h3>
                <h4>Category: {category}</h4>
                <p>{text}</p>
                </div>
            )
          }
        }
    
    
    
      export default PostNumber
