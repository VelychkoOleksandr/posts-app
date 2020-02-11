import React, { Component } from 'react';
import './app.css';
import UsersApiService from '../../services/users-api-service';
import PostsApiService from '../../services/posts-api-service';
import CommentsApiService from '../../services/comments-api-service';

class App extends Component {

  UsersApiService = new UsersApiService();
  PostsApiService = new PostsApiService();
  CommentsApiService = new CommentsApiService();

  async componentDidMount() {
    console.log(await this.UsersApiService.getUsersList());
    console.log(await this.PostsApiService.getPostsListByID(1));
    console.log(await this.PostsApiService.addNewPost(1, 'New Post', 'Test'));
    console.log(await this.CommentsApiService.getPostComments(1));
    console.log(await this.PostsApiService.updatePost(10, 1, 'New Title', 'DTF'));
    console.log(await this.PostsApiService.deletePostByID(3));
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
