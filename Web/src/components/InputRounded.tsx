import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const Input = styled.input`
  height: 45px;
  width: 100%;
  margin: 8px;
  padding: 16px;
  border-radius: 20px;
  border-color: ${colors.colorPrimary};
  font-size: 16px;
`

interface InputProps {
    name?: string 
    placeholder: string
    setValue?: any
}

export const InputRounded: React.FC<InputProps> = ({ name, placeholder, setValue }) => {
    return (
        <Input name={name} placeholder={placeholder} onChange={(e) => setValue(e.target.value)}/>
    )
}