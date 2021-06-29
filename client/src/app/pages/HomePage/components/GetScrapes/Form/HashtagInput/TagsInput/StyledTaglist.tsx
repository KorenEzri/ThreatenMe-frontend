import styled from 'styled-components';

export const StyledTaglist = styled.div`
width: 250px;
height: 65px;
overflow-x: scroll;
  li {
    list-style-type: none;
    display: inline;
    font-size: 16px;
    position: relative;
    margin: 4px;
    top: 80px;
    padding: 3px;
    background-color: wheat};
    border-radius: 6px;
    color: white;
    white-space: nowrap;
    cursor: pointer;

  }
  ul {
    position: relative;
    right: 45px;
    display:flex;
    margin-top: -70px;
  }
`;
