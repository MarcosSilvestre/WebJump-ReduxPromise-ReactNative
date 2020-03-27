import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const FullName = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin-horizontal: 6px;
`;

export const Year = styled.Text`
  margin-horizontal: 6px;
`;
