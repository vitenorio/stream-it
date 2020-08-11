import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { measures } from '../../utils/measures'

export const Button = styled.TouchableOpacity`
    width: ${measures.extraLarge * 4}%;
    height: ${(measures.extraLarge * 2) - 4}px; 
    alignSelf: center;
    alignItems: center;
    justifyContent: center;
    borderRadius: ${measures.extraLarge - 2}px;
    color: ${colors.light};
`;

export const ButtonPrimary = styled(Button)`
    backgroundColor: ${colors.colorPrimary};
    border: 1px solid ${colors.colorPrimary};
`;

export const ButtonSecondary = styled(Button)`
    marginTop: ${measures.large}px;
    border: 1px solid ${colors.colorPrimary};
`;

export const Text = styled.Text`
    color: ${colors.light};
    fontSize: ${measures.large + 4}px;
`;
