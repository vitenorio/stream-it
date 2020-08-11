import React from 'react'
import { Container, ImageLogo, Phrase, ContainerApproach, ContainerButtons } from './styles'

import Button from '../../components/Button'

import Logo from '../../../assets/logo.png'

const Approach = () => {
    return (
        <Container>
            <ContainerApproach>
                <ImageLogo source={Logo} />
                <Phrase>Faça parte da comunidade de devs</Phrase>

                <ContainerButtons>
                    <Button isSecondary={false} text={'Inscreva-se agora'} />
                    <Button isSecondary text={'Já possui conta? Faça login'} />
                </ContainerButtons>
            </ContainerApproach>
        </Container>
    )
}

export default Approach