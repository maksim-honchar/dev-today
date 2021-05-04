import React, { FC } from 'react'
import styled from 'styled-components'

const CommentCardDiv = styled.div`
    width: 300px;
    padding: 10px;
    border: 1px solid;
    margin: 10px auto;
`

type CommentCard = {
    comment: { postId: number; body: string; id: number }
}

export const CommentCard: FC<CommentCard> = ({ comment }) => {
    const { body, id } = comment
    return (
        <CommentCardDiv>
            <p>Author {id}</p>
            <p>
                <em>{body}</em>
            </p>
        </CommentCardDiv>
    )
}
