import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: auto;
  height: 40px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  
  & + & {
    margin-top: 10px;
  }
`;

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 4px;
  color: black;
  background-color: white;
  border: 2px solid red;
  border-radius: 5px;
  :hover,
  :focus {
    color: white;
    background-color: red;
  }
`;
