import {
  SAVE_USERS, SAVE_NEW_POST, SAVE_POST_COMMENTS, SAVE_SELECTED_POST, EDIT_POST, SAVE_USER_POSTS
} from "../action-types/action-types";

export default function reducer(state = {}, action) {
  switch (action.type) {

    case SAVE_USERS:
      return {
        ...state,
        users: action.payload
      }

    case SAVE_USER_POSTS:
      return {
        ...state,
        posts: action.payload
      }

    case SAVE_NEW_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      };

    case SAVE_POST_COMMENTS:
      return {
        ...state,
        postComments: action.payload
      }

    case SAVE_SELECTED_POST:
      return {
        ...state,
        selectedPost: action.payload,
      }

    case EDIT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      }

    default:
      return state;
  }
}