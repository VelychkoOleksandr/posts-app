import {
  SAVE_USERS, EDIT_POST, SAVE_USER_POSTS, SAVE_NEW_POST, SAVE_POST_COMMENTS, SAVE_SELECTED_POST
} from "../action-types/action-types";

export function save_users() {
  return SAVE_USERS;
}

export function save_posts() {
  return SAVE_USER_POSTS
}

export function save_new_post() {
  return SAVE_NEW_POST
}

export function edit_post() {
  return EDIT_POST
}

export function save_post_comments() {
  return SAVE_POST_COMMENTS
}

export function save_selected_post() {
  return SAVE_SELECTED_POST
}

