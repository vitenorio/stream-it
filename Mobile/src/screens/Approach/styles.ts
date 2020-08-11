import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { measures } from '../../utils/measures';

export const Container = styled.View`
    flex: 1;
    backgroundColor: ${colors.background};
    justifyContent: center;
    alignItems: center;
`;

export const ContainerApproach = styled.View`
    height: ${measures.extraLarge + 8}%;
    width: 100%;
    alignItems: center;
    padding: ${measures.large + 4}px;
`;

export const ImageLogo = styled.Image`
    marginTop: ${measures.large}px;
    width: ${measures.extraLarge * 2}%;
    height: ${measures.large + 6}%;
`;

export const Phrase = styled.Text`
    fontSize: ${measures.large + 4}px;
    color: ${colors.light};
    marginTop: ${measures.large}px;
`;

export const ContainerButtons = styled.View`
    bottom: 0;
    position: absolute;
`;
