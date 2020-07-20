import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const Line = styled.div`
  margin: 8px;
  background-color: ${colors.colorPrimary};
  height: 2px;
  box-shadow: 1px 1px 2px ${colors.colorPrimary};
`
export const Spacing: React.FC = () => {
    return (
        <Line/>
    )
}