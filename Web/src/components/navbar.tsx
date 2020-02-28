import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const height = window.innerHeight

const NavbarContainer = styled.div`
    display: 1;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background: ${colors.colorPrimary};
    height: ${height/10}px;
`  

export const Navbar: React.FunctionComponent<{}> = ({}) => {
    return (
        <NavbarContainer>
            <li>Logo</li>
        </NavbarContainer>
    )
}
