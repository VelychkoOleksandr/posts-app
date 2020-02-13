import React from "react";

import './post-edit-page.css';
import withPostsAPIService from "../../../services/with-services-hoc/with-post-api-service-hoc";
import { connect } from "react-redux";
import { edit_post } from "../../../redux/action-creators/action-creators";
import NavBar from "../nav-bar/nav-bar";

class PostEditPage extends React.Component {

  //NOT SURE IF THIS DATA WORTH SAVING IN REDUX
  state = {
    title: '',
    body: '',
    originTitle: '',
    originBody: '',
    postEdited: false,
    isInputEmpty: true
  }

  async componentDidMount() {

    //INITIALIZE EDITED POST
    if (!this.props.selectedPost) {
      const selectedPost = await this.props.postsApiService.getPostByID(this.props.match.params.id);

      this.setState({
        title: selectedPost.title,
        body: selectedPost.body,
        originTitle: selectedPost.title,
        originBody: selectedPost.body
      })
    } else {
      this.setState({
        title: this.props.selectedPost.title,
        body: this.props.selectedPost.body,
        originTitle: this.props.selectedPost.title,
        originBody: this.props.selectedPost.body
      })
    }

  }

  onSubmitPost = async (e) => {
    e.preventDefault();

    this.props.saveEditedPost({
      id: this.props.match.params.id,
      title: this.state.title,
      body: this.state.body
    });

    this.redirectToPostsList();
  }

  onTitleChange = (e) => {
    const isInputEmpty = e.target.value && this.state.body
      ? false
      : true;

    const postEdited = e.target.value === this.state.originTitle && this.state.body === this.state.originBody
      ? false
      : true;



    this.setState({
      title: e.target.value,
      isInputEmpty,
      postEdited
    })
  }

  onBodyChange = (e) => {
    const isInputEmpty = e.target.value && this.state.body
      ? false
      : true;

    const postEdited = this.state.title === this.state.originTitle && e.target.value === this.state.originBody
      ? false
      : true;

    this.setState({
      body: e.target.value,
      isInputEmpty,
      postEdited
    })
  }

  redirectToPostsList() {
    this.props.history.push(`/post/${this.props.match.params.id}`)
  }

  render() {
    const editAvailable = this.state.isInputEmpty === false && this.state.postEdited === true
      ? null
      : 'disabled';

    return (
      <React.Fragment>
        <NavBar />

        <div className='add-new-wrapper'>
          <form className='post-form'>
            <h2 className='text-uppercase header'>Edit</h2>

            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" className="form-control" id="title" placeholder="Enter title" onChange={this.onTitleChange} value={this.state.title} />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea className="form-control body-area" id="description" placeholder="Enter post" rows='10' onChange={this.onBodyChange} value={this.state.body} />
            </div>

            <div className='btn-submit-wrapper'>
              <button type="submit" className="btn btn-primary btn-submit" onClick={this.onSubmitPost}
                disabled={editAvailable}>SAVE</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    saveEditedPost: (payload) => dispatch({
      type: edit_post(),
      payload
    })
  }
}

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withPostsAPIService(PostEditPage)
)