import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    backgroundColor: #403E5A;
    justifyContent: center
    alignItems: center;
`;

export const ContainerApproach = styled.View`
    height: 35%;
    width: 100%;
    alignItems: center;
    padding: 15px;
`;

export const ImageLogo = styled.Image`
    width: 63%;
    height: 25%;
`;

export const Phrase = styled.Text`
    fontSize: 20px;
    color: #F6E7E7;
    marginTop: 20px;
`;

export const ContainerButtons = styled.View`
    bottom: 0;
    position: absolute;
`;

export const Button = styled.TouchableOpacity`
    width: 350px;
    height: 55px
    alignItems: center;
    justifyContent: center;
    borderRadius: 50px;
`;

export const ButtonRegister = styled(Button)`
    border: 1px solid #A66660; 
    backgroundColor: #A66660;
`;

export const ButtonText = styled.Text`
    fontSize: 20px;
    color: #F6E7E7;
`;

export const ButtonLogin = styled(Button)`
    marginTop: 15px;
    border: 1px solid #F6E7E7;
`;