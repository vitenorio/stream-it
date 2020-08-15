import React from 'react'
import { Text, Button } from './styles'

interface ButtonProps {
    text: String
    isSecondary?: Boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, isSecondary }) => (
    <Button isSecondary={isSecondary}>
        <Text>{text}</Text>
    </Button>
)

export default ButtonComponent