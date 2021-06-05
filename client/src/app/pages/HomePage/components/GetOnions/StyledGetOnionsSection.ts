import styled from 'styled-components';
export const StyledOnionWrapper = styled.div`
  margin: auto;
  padding: 10px;
  width: 70%;
  text-align: left;
  padding-left p {
    letter-spacing: 1px;
  }
`;
export const StyledOnionTitle = styled.div`
  -webkit-animation-name: slideInRight;
  text-shadow: 6px 6px 6px darkred;
  animation-name: slideInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;
export const StyledOnionSecondaryTitle = styled.div`
  -webkit-animation-name: slideInLeft;
  text-shadow: 22px 12px 16px rgb(75, 0, 0);
  animation-name: slideInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
`;
export const ThirdTitleTextWrapper = styled.span`
  text-shadow: 9px 5px 16px grey;
  transition: 300ms;
  &:hover {
    transition: 300ms;
    text-shadow: 1px 1px 4px grey;
  }
`;
export const StyledThirdOnionTitle = styled.div`
  -webkit-animation-name: slideInUp;
  color: #8c5252;
  letter-spacing: 2px;
  animation-name: slideInUp;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  @-webkit-keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  cursor: pointer;
  body {
    background-color: rgb(54, 54, 54);
    text-align: center;
    font-family: Helvetica;
    color: white;
    padding-top: 150px;
  }

  .hoverCSS3 {
    display: inline-block;
    position: relative;
    padding-bottom: 10px;
    font-size: 4vw;
  }
  .hoverCSS3:after {
    content: '';
    position: absolute;
    background-color: #fffff0;
    height: 3px;
    width: 0;
    top: 100%;
    left: 0;
    display: inline-block;
    opacity: 0;
    -webkit-transition: opacity 0.4s ease-out, width 0.4s ease-out;
    -moz-transition: opacity 0.4s ease-out, width 0.4s ease-out;
    -o-transition: opacity 0.4s ease-out, width 0.4s ease-out;
    transition: opacity 0.4s ease-out, width 0.4s ease-out;
  }

  .hoverCSS3:before {
    content: '🧅';
    display: inline;
    transform: rotate(180deg);
    float: right;
    margin-left: 8px;
    margin-top: 8px;
    -webkit-transition: -webkit-transform 0.4s ease-out;
    -moz-transition: transform 0.4s ease-out;
    -o-transition: transform 0.4s ease-out;
    transition: transform 0.4s ease-out, -ms-transform 0.4s ease-out;
  }

  .hoverCSS3:hover:before {
    transform: rotate(360deg);
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Opera, Chrome, and Safari */
  }

  .hoverCSS3:hover:after {
    opacity: 1;
    width: 100%;
  }
  -webkit-transition: color 800ms;
  -moz-transition: color 800ms;
  -ms-transition: color 800ms;
  -o-transition: color 800ms;
  transition: color 800ms;
  font-weight: bold;
  &:hover {
    transition: 800ms;
    color: whitesmoke;
  }
`;
