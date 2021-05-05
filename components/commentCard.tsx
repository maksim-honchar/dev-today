import React, { FC } from 'react'
import styled from 'styled-components'

const Author = styled.p`
    color: grey;
    font-weight: bold;
`

const CommentCardDiv = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid lightgrey;
    margin: 10px auto;
`

const Para = styled.p`
    font-style: italic;
`

type CommentCard = {
    comment: { postId: number; body: string; id: number }
}

export const CommentCard: FC<CommentCard> = ({ comment }) => {
    const { body, id } = comment
    return (
        <CommentCardDiv>
            <Author>Author {id}</Author>
            <Para>{body}</Para>
        </CommentCardDiv>
    )
}
