import React, { FC } from 'react'
import styled from 'styled-components'
import { CommentCard } from './commentCard'

const Wrapper = styled.div`
    max-width: 800px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    margin: auto;
`

type Comments = {
    comments: { postId: number; body: string; id: number } | any
}

export const Comments: FC<Comments> = ({ comments }) => {
    const userComments = comments?.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
    ))
    return <Wrapper>{userComments}</Wrapper>
}
