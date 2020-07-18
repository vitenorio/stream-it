import React from 'react'
import { signUpBackground } from '../../assets'
import styled from 'styled-components'
import { Form } from './Form'

const Container = styled.div`
  display: flex;
  margin: 10%;
`

export const SignUpScreen: React.FC = () => {
    return (
        <Container>
            <img src={signUpBackground} alt='Crie uma conta' width='80%' height='80%'/>
            <Form/>
        </Container>
    )
}