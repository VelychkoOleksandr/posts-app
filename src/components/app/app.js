import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './app.css';

import UserListPage from "./user-list-page";
import PostsListPage from './posts-list-page';
import AddNewPostPage from './add-new-post-page';
import PostDetails from './post-details';
import PostEditPage from './post-edit-page';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={UserListPage} />
          <Route exact path='/posts/:id' component={PostsListPage} />
          <Route exact path='/posts/:id/add' component={AddNewPostPage} />
          <Route exact path='/post/:id' component={PostDetails} />
          <Route exact path='/post/:id/edit' component={PostEditPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
