import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const A = styled.a`
    color: grey;
    cursor: pointer;
`

const Wrapper = styled.div`
    max-width: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    margin-bottom: 20px;
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
                    <A>HOME</A>
                </Link>
            </DivLink>
            <DivLink>
                <Link href="/posts/new">
                    <A>CREATE POST</A>
                </Link>
            </DivLink>
        </Wrapper>
    )
}
