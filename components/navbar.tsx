import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid green;
`

const DivLink = styled.div`
    &:hover {
        text-decoration: underline;
    }
`

export const Navbar: FC = () => {
    return (
        <Wrapper>
            <DivLink>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </DivLink>
            <DivLink>
                <Link href="/posts/new">
                    <a>Create post</a>
                </Link>
            </DivLink>
        </Wrapper>
    )
}
