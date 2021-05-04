import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Layout } from '../components/layout'

type Home = {
    posts: { title: string; body: string; id: number }
}

const Home: FC<Home> = ({ posts }) => {
    console.log(posts)
    return (
        <Layout>
            <p>Hello</p>
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
