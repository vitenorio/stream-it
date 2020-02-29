import React from "react"
import { Navbar } from "../../components/navbar"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { spacingSizes } from "../../utils/sizes"
import { FormStepper } from "../../components/stepper"
import { CreateAccountForm, AddPasswordForm, AddPhoneNumberForm, AddBirthdayForm, AddGitandJobForm } from "./FormComponents"

const height = window.innerHeight

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${height - height/10}px;
  background: ${colors.background};
  width: 50%;
`
const IntroContainer = styled.div`
  padding: ${spacingSizes.medium}%;
`
const Title = styled.div`
  font: 32pt 'roboto', sans-serif;
  color: ${colors.grey};
`
const Description = styled.div`
  font: 16pt 'roboto', sans-serif;
  color: ${colors.grey};
`

const FormContainer = styled.div`
  width: 60%;
  height: 70%;
  background: ${colors.white};
  box-shadow: 4px 8px rgba(112, 112, 112, 0.2);
`

export const HomeScreen:React.FC = ({}) => {

  function getSteps() {
    return ['Create an account', 'Create an password', 'Add phone number', 'Add birthday', 'Add git and job']
  }
  
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CreateAccountForm/>
      case 1:
        return <AddPasswordForm/>
      case 2:
        return <AddPhoneNumberForm/>
        case 3:
          return <AddBirthdayForm/>
          case 4:
            return <AddGitandJobForm/>
      default:
        return 'Unknown step'
    }
  }
  return (
    <>
    <Navbar/>
    <Content>
      <Container>
          <IntroContainer>
            <Title>Crie um perfil e explore  a comunidade de Devs!</Title>
            <Description>Tenha acesso a postagens ou crie as suas próprias. Compartilhe suas ideias e mobilize a comunidade!</Description>
          </IntroContainer>
      </Container>
      <Container>
        <FormContainer>
          <FormStepper getSteps={getSteps} getStepContent={getStepContent}/>
        </FormContainer>
      </Container>
      </Content>
    </>
  )
}