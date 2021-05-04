import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: [],
        currentPost: {
            title: '',
            body: '',
            id: 0,
            comments: { postId: 0, body: '', id: 0 },
        },
    },
    reducers: {
        addPosts: (state, action) => {
            state.allPosts = action.payload
        },
        addCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
    },
})

export const { addPosts, addCurrentPost } = postsSlice.actions

export default postsSlice.reducer
