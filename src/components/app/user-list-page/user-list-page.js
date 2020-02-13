import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './user-list-page.css';

import { save_users } from "../../../redux/action-creators/action-creators";
import withUsersAPIService from "../../../services/with-services-hoc/with-users-api-service";
import NavBar from "../../nav-bar/nav-bar";
import Spinner from "../spinner/spinner";

class UserListPage extends React.Component {

  async componentDidMount() {
    if (!this.props.users) {
      const users = await this.props.usersApiService.getUsersList();
      this.props.saveUsersToRedux(users);
    }
  }

  render() {

    //USERS LIST ELEMENT
    const usersList = this.props.users
      ? this.props.users.map(user => {
        const postsLink = `posts/${user.id}`;

        return <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <Link to={postsLink} className='btn btn-primary'>Posts</Link>
          </td>
        </tr>
      }
      )
      : null;

    //SPINNET REQUIRED
    const renderData = this.props.users
      ? <div className='users-table-container'>
          <table className='users-table table table-striped table-hover'>
            <caption className='table-caption text-uppercase'>List of users</caption>

            <thead className='thead-dark'>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Posts</th>
              </tr>
            </thead>

            <tbody>
              {usersList}
            </tbody>
          </table>
        </div>
      : <Spinner />

    return (
      <React.Fragment>
        <NavBar />

        {renderData}
      </React.Fragment>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveUsersToRedux: (users) => dispatch({
      type: save_users(),
      payload: users
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withUsersAPIService(UserListPage));