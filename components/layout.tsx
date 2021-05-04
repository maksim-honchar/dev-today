import React, { FC } from 'react'
import styled from 'styled-components'
import { Navbar } from './navbar'

const Wrapper = styled.div`
    max-width: 1200px;
    border: 1px solid red;
    margin: auto;
`

export const Layout: FC = ({ children }) => {
    return (
        <Wrapper>
            <Navbar />
            {children}
        </Wrapper>
    )
}
