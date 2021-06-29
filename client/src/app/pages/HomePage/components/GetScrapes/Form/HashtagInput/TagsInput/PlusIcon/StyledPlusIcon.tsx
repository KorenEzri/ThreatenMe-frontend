import styled from 'styled-components';

export const StyledPlusIcon = styled.div`
  display: inline-block;
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 99%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff), grey;
  background-position: center;
  background-size: 50% 2px, 2px 50%; /*thickness = 2px, length = 50% (25px)*/
  background-repeat: no-repeat;
  cursor: pointer;
  top: 7.5px;
  left: 8px;
`;
