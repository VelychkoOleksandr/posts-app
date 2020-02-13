import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './post-details-page.css';

import { save_post_comments, save_selected_post } from '../../../redux/action-creators/action-creators';
import withPostsAPIService from '../../../services/with-services-hoc/with-post-api-service-hoc';
import withCommentsAPIService from '../../../services/with-services-hoc/with-comments-api-service';
import NavBar from '../../nav-bar/nav-bar';

class PostDetails extends React.Component {

  async componentDidMount() {
     //INITIALIZE EDITED POST
     if (!this.props.selectedPost) {
      const selectedPost = await this.props.postsApiService.getPostByID(this.props.match.params.id);
      this.props.saveSelectedPost(selectedPost);
    }

    const postComments = await this.props.commentsApiService.getPostComments(this.props.match.params.id)
    this.props.savePostCommentsToRedux(postComments);
  }

  onDeletePost = async () => {
    this.props.postsApiService.deletePostByID(this.props.match.params.id)
      .then(() => {
        alert('Post Deleted')
        this.redirectToMain()
      })
      .catch(err => {
        alert('Server Error. Post not deleted')
        this.redirectToMain()
      })
}

  redirectToMain() {
    this.props.history.push(`/`)
  }

  render() {

    const postEditPageLink = `/post/${this.props.match.params.id}/edit`;

    const selectedPost = this.props.selectedPost
      ? <tbody className={'table-dark'}>
        <tr>
          <td>{this.props.selectedPost.title}</td>
          <td>{this.props.selectedPost.body}</td>
          <td>
            <Link to={ postEditPageLink } className='btn btn-success'>EDIT</Link>
          </td>
          <td>
            <button className='btn btn-danger' onClick={ this.onDeletePost }>DELETE</button>
          </td>
        </tr>
      </tbody>
      : null;

    const commentsList = this.props.postComments
      ? this.props.postComments.map(({id, name, email, body}) =>
        <tr key={id} className='comment'>
          <td>{name}</td>
          <td>{email}</td>
          <td>{body}</td>
        </tr>)
      : null;

    return (
      <React.Fragment>
        <NavBar />

        <h2 className='text-uppercase header'>Post</h2>
        <div className='users-table-container'>
          <table className='users-table table table-striped'>
            {selectedPost}
          </table>
        </div>

        <h2 className='text-uppercase header'>Comments</h2>
        <div className='users-table-container'>
          <table className='users-table table table-striped table-hover'>
            <tbody>
              {commentsList}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    postComments: state.postComments,
    selectedPost: state.selectedPost
  }
}

const mapDispatchToProps = (dispatch) => ({
  savePostCommentsToRedux: (payload) => dispatch({
    type: save_post_comments(),
    payload
  }),

  saveSelectedPost: (payload) => dispatch({
    type: save_selected_post(),
    payload
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withCommentsAPIService(
    withPostsAPIService(PostDetails))
);