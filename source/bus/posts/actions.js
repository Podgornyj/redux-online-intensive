import { types } from './types';
import { api } from '../../REST';


export const  postsActions = {
    fillPosts : (posts) => {
        return {
            type: types.FILL_POSTS,
            payload: posts,
        };
    },
    fetchPostsAsync : () => {
        return {
            type: types.FETCH_POST_ASYNC,
        };
    },
    fillNewPost : (post) => {
        return {
            type: types.FILL_NEW_POST,
            payload: post,
        };
    },
    createPostAsync : (comment) => {
        return {
            type: types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    clearPosts : () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },
    removePostAsync : (id) => {
        return {
            type: types.REMOVE_POST_ASYNC,
            payload: id,
        };
    },
    removePost : (id) => {
        return {
            type: types.REMOVE_POST,
            payload: id,
        };
    },
    likePostAsync : (id) => {
        return {
            type: types.LIKE_POST_ASYNC,
            payload: id,
        };
    },
    unlikePostAsync : (id) => {
        return {
            type: types.UNLIKE_POST_ASYNC,
            payload: id,
        };
    },
    likePost : (likedPostData) => {
        return {
            type: types.LIKE_POST,
            payload: likedPostData,
        };
    },
    unlikePost : (likedPostData) => {
        return {
            type: types.UNLIKE_POST,
            payload: likedPostData,
        };
    },
};
