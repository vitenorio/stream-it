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
  
    const steps = [
        {
            title: 'Personal Info',
            inputs: [
                { placeholder: 'Nome'},
                { placeholder: 'E-mail'},
            ],
        }, 
        {   title: 'Password',
            inputs: [
                { placeholder: 'Senha'},
                { placeholder: 'Confirmar senha'},
            ],
        }, 
        {   title: 'Additional Info',
            inputs: [
                { placeholder: 'GitHub'},
                { placeholder: 'Ocupação'},
            ],
        }
    ]

    const onPressBack = () => {
        activeStep === 0 ? setActiveStep(0) : setActiveStep(activeStep - 1)
    }

    const onPressNext = () => {
        activeStep === steps.length - 1 ? setActiveStep(steps.length - 1) : setActiveStep(activeStep + 1)
    }

    return (
        <FormContainer>
            <img src={logoLight} alt='logo'/>
            <Spacing/>
            <Text>Crie sua conta</Text>

            {steps[activeStep].inputs.map(input => (
                <InputRounded placeholder={input.placeholder}/>
            ))}
    
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