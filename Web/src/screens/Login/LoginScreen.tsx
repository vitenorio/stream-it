import React from 'react'
import { Form } from './Form'
import { loginBackground } from '../../assets'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin: 10%;
`
const Description = styled.h1`
  font-weight: 300;
  font-size: 24px;
  margin: 16px;
  text-align: center;
`

export const LoginScreen: React.FC = () => {
    return (
        <Container>
            <div>
                <img src={loginBackground} alt='Crie uma conta'/>
                <Description>Faça parte da comunidade de devs</Description>
            </div>
            <Form/>
        </Container>
    )
}