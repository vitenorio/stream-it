import React from 'react'
import { Container, Phrase } from './styles'

import { Image } from 'react-native'

import Button from '../../components/Button'
import { logo } from '../../../assets'

const Approach = () => {
    return (
        <Container>
            <Image source={logo} />
            <Phrase>Faça parte da comunidade de devs</Phrase>

            <Button text={'Inscreva-se agora'} />
            <Button isSecondary text={'Já possui conta? Faça login'} />
        </Container>
    )
}

export default Approach