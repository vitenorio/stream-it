import React from 'react'
import styled from 'styled-components'
import { logoLight } from '../../assets'
import { Spacing } from '../../components/Spacing'
import { InputRounded } from '../../components/InputRounded'
import { Button } from '../../components/Button'
import { colors } from '../../utils/colors'

const FormContainer = styled.div`
  align-items: center;
  text-align: center;
  margin: 0 6%;
`

const Text = styled.h1`
  font-weight: 300;
  margin: 16px;
`

const CheckBox = styled.input`
  margin: 16px;
  border-radius: 20px;
`

const LabelOutlined = styled.label`
  color: ${colors.colorPrimary};
  cursor: pointer;
`

export const Form: React.FC = () => {
    return (
        <FormContainer>
            <img src={logoLight} alt='logo'/>
            <Spacing/>
            <Text>Faça seu logon</Text>
            <InputRounded placeholder='E-mail'/>
            <InputRounded placeholder='Senha'/>
            <CheckBox type={'radio'} id='rememberMe'/>
            <label itemRef='rememberMe'>Lembrar usuário</label>
            <Button title='Entrar'/>
            <Spacing/>
            <label>Não possui conta? </label><LabelOutlined>Crie uma agora</LabelOutlined>
        </FormContainer>
    )
}