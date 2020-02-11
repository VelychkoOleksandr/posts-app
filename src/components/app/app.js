import React, { Component } from 'react';

import './app.css';

import UsersApiService from '../../services/users-api-service';
import PostsApiService from '../../services/posts-api-service';
import CommentsApiService from '../../services/comments-api-service';

import { connect } from "react-redux";
import { save_users } from '../../redux/action-creators/action-creators';
import { SAVE_USERS } from '../../redux/action-types/action-types';

class App extends Component {

  UsersApiService = new UsersApiService();
  PostsApiService = new PostsApiService();
  CommentsApiService = new CommentsApiService();

  async componentDidMount() {
    const users = await this.UsersApiService.getUsersList();
    this.props.saveUsersToRedux(users);
    
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveUsersToRedux: (users) => dispatch({
      type: SAVE_USERS, 
      payload: users
    })
  }
}

export default connect(null, mapDispatchToProps)(App);
