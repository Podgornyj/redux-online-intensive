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
};
