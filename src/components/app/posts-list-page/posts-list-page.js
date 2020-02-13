import React from "react";

import withPostsAPIService from "../../../services/with-services-hoc/with-post-api-service-hoc";
import { connect } from "react-redux";
import { save_posts } from "../../../redux/action-creators/action-creators";

import './posts-list-page.css';
import { Link } from "react-router-dom";
import NavBar from "../nav-bar/nav-bar";

class PostsListPage extends React.Component {

  async componentDidMount() {
    if (!this.props.posts) {
      const posts = await this.props.postsApiService.getPostsListByID(this.props.match.params.id)
      this.props.savePostsToRedux(posts)
    }
  }

  createPostDetailsLink(id) {
    return `/post/${id}`;
  }

  render() {
    const addNewPostLink = `/posts/${this.props.match.params.id}/add`;   

    return (
      <React.Fragment>
        <NavBar /> 

        <div className='users-table-container'>
          <table className='users-table table table-striped table-hover'>
            <caption className='table-caption text-uppercase'>List of posts</caption>

            <thead className='thead-dark'>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th colSpan='2'>Text</th>

              </tr>
            </thead>

            <tbody>
              {
                this.props.posts
                  ? this.props.posts.map(post => {
                    return <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                      <td>
                        <Link to={this.createPostDetailsLink(post.id)} className='btn btn-success'>Details</Link>
                      </td>
                    </tr>
                  })
                  : null
              }
            </tbody>
          </table>
        </div>

        <div className='btn-add-continer'>
          <Link to={addNewPostLink} className='btn btn-primary'>ADD NEW</Link>
        </div>

      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    savePostsToRedux: (posts) => dispatch({
      type: save_posts(),
      payload: posts
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withPostsAPIService(PostsListPage)
);
