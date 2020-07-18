import React, { useState } from 'react'
import styled from 'styled-components'
import { logoLight } from '../../assets'
import { Spacing } from '../../components/Spacing'
import { InputRounded } from '../../components/InputRounded'
import { Button } from '../../components/Button'
import { colors } from '../../utils/colors'
import { ProgressBar } from '../../components/ProgressBar'

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

const ProgressBarContainer = styled.div`
  padding: 0 30%;
`

export const Form: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)
  
    const steps = [{title: 'Personal Info'}, {title: 'Password'}, {title: 'Additional Info'}]

    const onPressBack = () => {
        setActiveStep(activeStep - 1)
    }

    const onPressNext = () => {
        setActiveStep(activeStep + 1)
    }

    return (
        <FormContainer>
            <img src={logoLight} alt='logo'/>
            <Spacing/>
            <Text>Crie sua conta</Text>

            <InputRounded placeholder='E-mail'/>
            <InputRounded placeholder='Senha'/>
            
            <ProgressBarContainer>
                <ProgressBar steps={steps} activeStep={activeStep}/>
            </ProgressBarContainer>
           
            <ButtonContainer>
                <Button title='Voltar' isSecondary onClick={onPressBack}/>
                <Button title='Avançar' onClick={onPressNext}/>
            </ButtonContainer>
            <Spacing/>
            <label>Já possui conta? </label><LabelOutlined>Entre</LabelOutlined>
        </FormContainer>
    )
}