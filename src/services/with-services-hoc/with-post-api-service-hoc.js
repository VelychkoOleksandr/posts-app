import React from 'react';

import PostsAPIServiceContext from "../../contexts/posts-api-service-context";

const withPostsAPIService = (Wrapper) => {

  return (props) => {
    return (
      <PostsAPIServiceContext.Consumer>
        {
          postsAPIService => <Wrapper postsApiService={postsAPIService} {...props}></Wrapper>
        }
      </PostsAPIServiceContext.Consumer>
    );
  }
}

export default withPostsAPIService;