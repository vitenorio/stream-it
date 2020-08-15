import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { measures, fontSizes } from '../../utils/measures'

export const Button = styled.TouchableOpacity`
    width: 80%;
    padding: ${measures.large}px;
    align-items: center;
    background-color: ${(props) => props.isSecondary ? colors.transparent : colors.colorPrimary };
    border: 1px solid ${colors.colorPrimary};
    border-radius: ${measures.extraLarge}px;
    margin-top: ${measures.mediumLarge}px;
`;

export const Text = styled.Text`
    color: ${colors.light};
    font-size: ${fontSizes.mediumFont}px;
`;
