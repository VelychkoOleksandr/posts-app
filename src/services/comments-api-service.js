export default class CommentsApiService {

  _commentsByIDBaseURL = 'https://jsonplaceholder.typicode.com/comments?postId=';

  async getPostComments(id) {
    const commentsURL = `${this._commentsByIDBaseURL}${id}`;

    const comments = await fetch(commentsURL)
      .then(comments => comments.json());

    return comments;
  }


}