import React from "react"
import { Navbar } from "../../components/navbar"
import styled from "styled-components"
import { colors } from "../../utils/colors"
import { spacingSizes } from "../../utils/sizes"

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

        </FormContainer>
      </Container>
      </Content>
    </>
  )
}