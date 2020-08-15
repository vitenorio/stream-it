import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { measures, fontSizes } from '../../utils/measures';

export const Container = styled.View`
    display: flex;
    height: 100%;
    background-color: ${colors.background};
    justify-content: center;
    align-items: center;
`;

export const Phrase = styled.Text`
    font-size: ${fontSizes.largeFont}px;
    color: ${colors.light};
    margin-top: ${measures.large}px;
`;
