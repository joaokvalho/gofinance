import styled from 'styled-components/native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(19)}px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};  
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`
export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: ${RFValue(24)}px;
`
export const Fields = styled.View`
`
export const OperationType = styled.View`
  flex-direction: row;
  align-items:center;
  justify-content: space-around;
`
