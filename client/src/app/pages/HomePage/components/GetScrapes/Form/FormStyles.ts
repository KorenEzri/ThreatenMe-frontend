import styled from 'styled-components';
export const ScrapeAWebSiteInput = styled.div`
  margin: 5px;
  margin-top: 50px;
  input {
    padding: 12px;
    margin: 10px;
    font-size: 18px;
    background-color: grey;
    color: white;
    outline: none;
    &:focus {
      background-color: #bfbfc1;
      color: black;
      border: 1px solid white;
    }
  }
  label {
    font-size: 16px;
    font-weight: bold;
    color: grey;
    letter-spacing: 1px;
  }
  p {
    font-size: 20px;
  }
  margin-bottom: -200px;
`;

export const MinimalFormContainer = styled.div`
  display: flex;
  input {
    width: 60%;
    max-width: 400px;
    min-width: 400px;
  }
  flex-direction: column;
`;
export const AdvancedFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -350px;
  margin-left: 450px;
  width: 30%;
  input {
  }
`;
export const AdvancedFormContainerB = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -280px;
  width: 30%;
  input {
  }
`;
export const ScrapeItButton = styled.button`
  border: 1px solid whitesmoke;
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 55px;
  letter-spacing: 1.5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px;
  transition: 500ms;
  color: white;
  background-color: black;
  &:hover {
    transition: 500ms;
    border: 1px solid black;
    background-color: whitesmoke;
    color: black;
  }
  position: relative;
  top: -80px;
`;
export const AdvancedFormWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;
export const StyledRequiredSpan = styled.span`
  padding-left: 5px;
  color: #ff3300 !important;
`;
