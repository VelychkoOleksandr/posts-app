import {
  SAVE_USERS
} from "../action-types/action-types";

export default function reducer(state = {}, action) {
  switch (action.type) {

    case SAVE_USERS:
      console.log(SAVE_USERS);
      return {
        ...state,
        users: action.payload
      }

    case 'ADD':
      console.log('ADD');
      return state;

    default:
      return state;
  }
}