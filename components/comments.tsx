import React, { FC } from 'react'
import styled from 'styled-components'
import { CommentCard } from './commentCard'

const Wrapper = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 25px auto;
`

type Comments = {
    comments: { postId: number; body: string; id: number }[] | any
}

export const Comments: FC<Comments> = ({ comments }) => {
    const commentsLength = comments.length > 0

    return (
        <Wrapper>
            {commentsLength &&
                comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}
        </Wrapper>
    )
}
