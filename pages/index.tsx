import React, { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from '../components/layout'
import { addPosts } from '../redux/postsSlice'
import { RootState } from '../redux/store'

type Home = {
    posts: { title: string; body: string; id: number }
}

const Home: FC<Home> = ({ posts }) => {
    const dispatch = useDispatch()
    const allPosts = useSelector((state: RootState) => state.posts.allPosts)

    const postsOut = allPosts.map((post) => <p key={post.id}>{post.title}</p>)

    useEffect(() => {
        dispatch(addPosts(posts))
    }, [dispatch, posts])

    return <Layout>{postsOut}</Layout>
}

export const getServerSideProps: GetServerSideProps = async () => {
    const posts = await axios.get(`https://simple-blog-api.crew.red/posts`)
    const { data } = posts
    return {
        props: {
            posts: data,
        },
    }
}

export default Home
