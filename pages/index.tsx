import React, { FC, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'
import { Layout } from '../components/layout'
import { addPosts } from '../redux/postsSlice'
import { RootState } from '../redux/store'
import { Card } from '../components/card'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

type Home = {
    posts: { title: string; body: string; id: number }
}

const Home: FC<Home> = ({ posts }) => {
    const dispatch = useDispatch()
    const allPosts = useSelector((state: RootState) => state.posts.allPosts)
    const status = useSelector((state: RootState) => state.posts.status)

    const postsOut = allPosts.map((post) => (
        <Link key={post.id} href={`/posts/${post.id.toString()}`}>
            <a>
                <Card title={post.title} body={post.body} />
            </a>
        </Link>
    ))

    useEffect(() => {
        dispatch(addPosts(posts))
    }, [dispatch, posts, status])

    return (
        <Layout>
            <Wrapper>{postsOut}</Wrapper>
        </Layout>
    )
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
