import React from 'react'
import { Container, ImageLogo, Phrase, ContainerApproach, ButtonRegister, ButtonText, ButtonLogin, ContainerButtons } from './styles.js'

import Logo from '../../../assets/logo.png'

const Approach = () => {
    return (
        <Container>
            <ContainerApproach>
                <ImageLogo source={Logo} />
                <Phrase>Faça parte da comunidade de devs</Phrase>

                <ContainerButtons>
                    <ButtonRegister>
                        <ButtonText>Inscreva-se agora</ButtonText>
                    </ButtonRegister>

                    <ButtonLogin>
                        <ButtonText>Tem conta? Faça login</ButtonText>
                    </ButtonLogin>
                </ContainerButtons>
            </ContainerApproach>

        </Container>
    )
}

export default Approach