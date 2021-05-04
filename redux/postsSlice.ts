import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        allPosts: [],
    },
    reducers: {
        addPosts: (state, action) => {
            state.allPosts = action.payload
        },
    },
})

export const { addPosts } = postsSlice.actions

export default postsSlice.reducer
