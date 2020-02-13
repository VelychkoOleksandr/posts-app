import React from 'react';

import UsersAPIServiceContext from '../../contexts/users-api-service-context';

const withUsersAPIService = (Wrapper) => {

  return (props) => {
    return (
      <UsersAPIServiceContext.Consumer>
        {
          usersAPIService => <Wrapper usersApiService={usersAPIService} {...props}></Wrapper>
        }
      </UsersAPIServiceContext.Consumer>
    );
  }
}

export default withUsersAPIService;