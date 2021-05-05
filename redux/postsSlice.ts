import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type NewPost = { title: string; body: string; id: number }

export const createPost = createAsyncThunk(
    'posts/createPost',
    async (newPost: NewPost) => {
        const options = {
            headers: { 'Content-Type': 'application/json' },
        }

        const response = await axios.post(
            'https://simple-blog-api.crew.red/posts',
            newPost,
            options
        )
        return response.data
    }
)

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
        status: 'idle',
        error: null,
        newPostId: 0,
    },
    reducers: {
        addPosts: (state, action) => {
            state.allPosts = action.payload
        },
        addCurrentPost: (state, action) => {
            state.currentPost = action.payload
        },
    },
    extraReducers: (buildier) => {
        buildier.addCase('posts/createPost/pending', (state) => {
            state.status = 'loading'
        })
        buildier.addCase('posts/createPost/fulfilled', (state) => {
            state.status = 'succeeded'
        })
        buildier.addCase('posts/createPost/rejected', (state) => {
            state.status = 'failed'
        })
    },
})

export const { addPosts, addCurrentPost } = postsSlice.actions

export default postsSlice.reducer
