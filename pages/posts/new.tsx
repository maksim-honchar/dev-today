import React, { FC, useState, SyntheticEvent } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Layout } from '../../components/layout'
import { createPost } from '../../redux/postsSlice'

const H2 = styled.h2`
    color: grey;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

const Input = styled.input`
    display: block;
    width: 300px;
    height: 30px;
`

const Textarea = styled.textarea`
    display: block;
    margin: 10px auto;
    width: 300px;
    height: 100px;
`

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid grey;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    width: 300px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    background-color: grey;
`

const CreatePostPage: FC = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChangeInput = ({ target: { value } }) => setTitle(value)
    const handeChangeTextare = ({ target: { value } }) => setBody(value)

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if (title && body) {
            const newPost = { id: 0, title, body }
            const response: any = await dispatch(createPost(newPost))

            if (!response.error) {
                setTitle('')
                setBody('')
                router.push(`/posts/${response.payload.id}`)
            }
        }
    }

    return (
        <Layout>
            <Wrapper>
                <H2>Create Post</H2>
                <div>
                    <Input
                        value={title}
                        onChange={handleChangeInput}
                        placeholder="title"
                    />
                </div>
                <div>
                    <Textarea
                        value={body}
                        onChange={handeChangeTextare}
                        placeholder="text"
                    />
                </div>
                <div>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default CreatePostPage
