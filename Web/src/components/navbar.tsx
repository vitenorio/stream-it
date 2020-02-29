import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'
import { streamitLogo } from '../assets'
import { spacingSizes } from '../utils/sizes'

const height = window.innerHeight

const NavbarContainer = styled.div`
    display: 1;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    background: ${colors.colorPrimary};
    height: ${height/10}px;
`  

const LogoContainer = styled.div`
    width: 30%;
    height: 100%;
    margin-left: ${spacingSizes.small}%;
`  
export const Navbar: React.FunctionComponent<{}> = ({}) => {
    return (
        <NavbarContainer>
        <LogoContainer>
            <img src={streamitLogo} width={'auto'} height={'100%'}/>
        </LogoContainer>
        </NavbarContainer>
    )
}
