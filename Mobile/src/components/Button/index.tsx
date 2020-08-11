import React from 'react'
import { Text, ButtonPrimary, ButtonSecondary } from './styles'

interface ButtonProps {
    text: String
    isSecondary: Boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, isSecondary }) => (
    <>
        {isSecondary ? (
                <ButtonSecondary>
                    <Text>{text}</Text>
                </ButtonSecondary>
            )
            : (
                <ButtonPrimary>
                    <Text>{text}</Text>
                </ButtonPrimary>
            )
        }
    </>
)

export default ButtonComponent