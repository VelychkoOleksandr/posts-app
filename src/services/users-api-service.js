export default class UsersApiService {

  _userListURL = 'https://jsonplaceholder.typicode.com/users';
  
  async getUsersList() {
    const users = await fetch(this._userListURL)
      .then(users => users.json());

    return users;
  }
}