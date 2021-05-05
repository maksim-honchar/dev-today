import React, { FC } from 'react'
import styled from 'styled-components'

const Title = styled.h4`
    color: grey;
`

const Para = styled.p``

const CardElement = styled.div`
    width: 500px;
    min-height: 120px;
    border: 1px solid lightgrey;
    margin: 5px auto;
    padding: 10px;
    border-radius: 3px;
`

type Card = {
    title: string
    body: string
}

export const Card: FC<Card> = ({ title, body }) => {
    const formatBody = body?.substring(0, 100)
    return (
        <CardElement>
            <Title>{title}</Title>
            <Para>{formatBody}...</Para>
        </CardElement>
    )
}
