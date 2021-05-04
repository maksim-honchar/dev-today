import React, { FC } from 'react'
import styled from 'styled-components'

const CardElement = styled.div`
    width: 500px;
    height: 120px;
    border: 1px solid green;
    margin: 5px auto;
    padding: 10px;
    padding: 10px;
`

type Card = {
    title: string
    body: string
}

export const Card: FC<Card> = ({ title, body }) => {
    const formatBody = body?.substring(0, 100)
    return (
        <CardElement>
            <h5>{title}</h5>
            <p>{formatBody}...</p>
        </CardElement>
    )
}
