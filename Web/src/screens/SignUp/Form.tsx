import React from 'react'
import styled from 'styled-components'
import { logoLight } from '../../assets'
import { Spacing } from '../../components/Spacing'
import { InputRounded } from '../../components/InputRounded'
import { Button } from '../../components/Button'
import { colors } from '../../utils/colors'

const FormContainer = styled.div`
  align-self: center;
  text-align: center;
  margin: 0 5%;
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

const ButtonContainer = styled.div`
    display: flex;
`

export const Form: React.FC = () => {
    return (
        <FormContainer>
            <img src={logoLight} alt='logo'/>
            <Spacing/>
            <Text>Crie sua conta</Text>

            <InputRounded placeholder='E-mail'/>
            <InputRounded placeholder='Senha'/>
            


            <ButtonContainer>
                <Button title='Voltar' isSecondary/>
                <Button title='Avançar'/>
            </ButtonContainer>
            <Spacing/>
            <label>Já possui conta? </label><LabelOutlined>Entre</LabelOutlined>
        </FormContainer>
    )
}