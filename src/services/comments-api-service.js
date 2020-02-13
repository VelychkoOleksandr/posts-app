export default class CommentsApiService {

  _commentsURL = 'https://jsonplaceholder.typicode.com/comments';
  _commentsByIDBaseURL = 'https://jsonplaceholder.typicode.com/comments?postId=';

  async getAllComments() {
    const comments = await fetch(this._commentsURL)
      .then(comments => comments.json());

    return comments;
  } 
  
  async getPostComments(id) {
    const commentsURL = `${this._commentsByIDBaseURL}${id}`;

    const comments = await fetch(commentsURL)
      .then(comments => comments.json());

    return comments;
  }
 
}