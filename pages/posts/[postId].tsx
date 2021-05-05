import React, { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Layout } from '../../components/layout'
import { addCurrentPost } from '../../redux/postsSlice'
import { RootState } from '../../redux/store'
import { Comments } from '../../components/comments'

const TitleElement = styled.h2`
    color: grey;
`

const Wrapper = styled.div`
    max-width: 800px;
    margin: auto;
    min-height: 100vh;
`

type Post = {
    post: {
        title: string
        body: string
        id: number
        comments: { postId: number; body: string; id: number }
    }
}

export const Post: FC<Post> = ({ post }) => {
    const dispatch = useDispatch()
    const currentPost = useSelector(
        (state: RootState) => state.posts.currentPost
    )

    const { title, body, comments } = currentPost

    useEffect(() => {
        dispatch(addCurrentPost(post))
    }, [dispatch, post])

    return (
        <Layout>
            <Wrapper>
                <TitleElement>{title}</TitleElement>
                <p>{body}</p>
                <hr />
                <Comments comments={comments} />
            </Wrapper>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {
        query: { postId },
    } = context

    const post = await axios.get(
        `https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`
    )

    const { data } = post

    return {
        props: {
            post: data,
        },
    }
}

export default Post
