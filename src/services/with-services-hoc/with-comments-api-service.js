import React from 'react';

import CommentsAPIServiceContext from '../../contexts/comments-api-service-context';

const withCommentsAPIService = (Wrapper) => {

  return (props) => {
    return (
      <CommentsAPIServiceContext.Consumer>
        {
          commentsAPIService => <Wrapper commentsApiService={commentsAPIService} {...props}></Wrapper>
        }
      </CommentsAPIServiceContext.Consumer>
    );
  }
}

export default withCommentsAPIService;