export default class PostsApiService {

  _postsPostURL =           'https://jsonplaceholder.typicode.com/posts';
  _postsUpdateByIDBaseURL = 'https://jsonplaceholder.typicode.com/posts/';
  _postsByIDBaseURL =       'https://jsonplaceholder.typicode.com/posts?userId=';

  async getPostByID(id) {
    const postURL = `${this._postsUpdateByIDBaseURL}${id}`;
    const post = await fetch(postURL)
      .then(post => post.json());

    return post;
  }

  async getPostsListByID(id) {
    const userPostsUrl = `${this._postsByIDBaseURL}${id}`;
    const posts = await fetch(userPostsUrl)
      .then(posts => posts.json());

    return posts;
  }

  async addNewPost(userId, title, body) {
    const newPost = await fetch(this._postsPostURL, {
      method: 'POST',
      body: JSON.stringify({
        userId,
        title,
        body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(post => post.json());

    return newPost;
  }

  async updatePost(id, userId, title, body) {
    const updatePostByIdURL = `${this._postsUpdateByIDBaseURL}${id}`;
    const newPost = await fetch(updatePostByIdURL, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        userId,
        title,
        body
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(post => post.json());

    return newPost;
  }

  async deletePostByID(id) {
    const deletePostByIDURL = `${this._postsUpdateByIDBaseURL}${id}`;

    const removeResult = await fetch(deletePostByIDURL, {
      method: 'DELETE'
    })
    .then(post => post.ok);

    return removeResult;
  }

  async getPostComments(id) {
    const commentsURL = `${this._commentsByIDBaseURL}${id}`;

    const comments = await fetch(commentsURL)
      .then(comments => comments.json());

    return comments;
  }


}