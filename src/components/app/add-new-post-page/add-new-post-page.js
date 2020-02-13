import React from "react";
import { connect } from "react-redux";

import './add-new-post-page.css';

import withPostsAPIService from "../../../services/with-services-hoc/with-post-api-service-hoc";
import { save_new_post } from "../../../redux/action-creators/action-creators";
import NavBar from "../nav-bar/nav-bar";

class AddNewPostPage extends React.Component {

  //NOT SURE IF THIS DATA WORTH SAVING IN REDUX
  state = {
    title: '',
    body: '',
    btnDisabled: true
  }

  onSubmitPost = async (e) => {
    e.preventDefault()

    const newPost = await this.props.postsApiService.addNewPost(this.props.match.params.id, this.state.title, this.state.body)

    if (newPost) {
      this.props.saveNewPost(newPost)
      this.redirectToPostsList()
    }
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value,
      btnDisabled: e.target.value && this.state.body
        ? false
        : true
    })
  }

  onBodyChange = (e) => {
    this.setState({
      body: e.target.value,
      btnDisabled: this.state.title && e.target.value
        ? false
        : true
    })
  }

  redirectToPostsList() {
    this.props.history.push(`/posts/${this.props.match.params.id}`)
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <div className='add-new-wrapper'>
          <form className='post-form'>
            <h3 className='heading'>Add New Post</h3>

            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" className="form-control" id="title" placeholder="Enter title" onChange={this.onTitleChange} value={this.state.title} />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea className="form-control" id="description" placeholder="Enter post" rows='5' onChange={this.onBodyChange} value={this.state.body} />
            </div>

            <div className='btn-submit-wrapper'>
              <button type="submit" className="btn btn-primary btn-submit" onClick={this.onSubmitPost} disabled={this.state.btnDisabled}>ADD</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    saveNewPost: (payload) => dispatch({
      type: save_new_post(),
      payload
    })
  }
}

export default connect(null, mapDispatchToProps)(
  withPostsAPIService(AddNewPostPage)
);