import styled from 'styled-components/native';

export const Header = styled.View`
  padding-top: 35px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #f4f4f4;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const SearchContainer = styled.View`
  padding: 20px;
  background-color: #f4f4f4;
`;

export const FormSearch = styled.View`
  background-color: #f0f0f0;
  border-radius: 4px;
`;

export const Footer = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  resize-mode: contain;
  align-self: center;
  background-color: #f4f4f4;
  width: 100%;
`;

export const Version = styled.Text`
  font-size: 10px;
`;
