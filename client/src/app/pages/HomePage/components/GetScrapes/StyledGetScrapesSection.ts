import styled from 'styled-components';
export const ScrapesContainer = styled.div`
  text-align: center;
  height: 550px;
  overflow: hidden;
  background-color: black;
  color: white;
  /*waves****************************/
  .box {
    top: 0;
    transform: rotate(80deg);
    left: 0;
  }

  .wave {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.4;
    position: absolute;
    top: 3%;
    left: 10%;
    background: #0af;
    width: 1200px;
    height: 1300px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    animation: drift 7000ms infinite linear;
  }

  .wave.-three {
    animation: drift 7500ms infinite linear;
    position: fixed;
    background-color: red;
  }

  .wave.-two {
    animation: drift 3000ms infinite linear;
    opacity: 0.1;
    background: black;
    position: fixed;
  }

  .box:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
    transform: translate3d(0, 0, 0);
  }

  @keyframes drift {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }

  /*LOADING SPACE*/

  .contain {
    animation-delay: 4s;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #25a7d7;
    background: -webkit-linear-gradient(#25a7d7, #2962ff);
    background: linear-gradient(#25a7d7, #25a7d7);
  }

  .icon {
    width: 100px;
    height: 100px;
    margin: 0 5px;
  }

  /*Animation*/
  .icon:nth-child(2) img {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .icon:nth-child(3) img {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .icon:nth-child(4) img {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .icon img {
    -webkit-animation: anim 2s ease infinite;
    animation: anim 2s ease infinite;
    -webkit-transform: scale(0, 0) rotateZ(180deg);
    transform: scale(0, 0) rotateZ(180deg);
  }

  @-webkit-keyframes anim {
    0% {
      -webkit-transform: scale(0, 0) rotateZ(-90deg);
      transform: scale(0, 0) rotateZ(-90deg);
      opacity: 0;
    }
    30% {
      -webkit-transform: scale(1, 1) rotateZ(0deg);
      transform: scale(1, 1) rotateZ(0deg);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(1, 1) rotateZ(0deg);
      transform: scale(1, 1) rotateZ(0deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: scale(0, 0) rotateZ(90deg);
      transform: scale(0, 0) rotateZ(90deg);
      opacity: 0;
    }
  }

  @keyframes anim {
    0% {
      -webkit-transform: scale(0, 0) rotateZ(-90deg);
      transform: scale(0, 0) rotateZ(-90deg);
      opacity: 0;
    }
    30% {
      -webkit-transform: scale(1, 1) rotateZ(0deg);
      transform: scale(1, 1) rotateZ(0deg);
      opacity: 1;
    }
    50% {
      -webkit-transform: scale(1, 1) rotateZ(0deg);
      transform: scale(1, 1) rotateZ(0deg);
      opacity: 1;
    }
    80% {
      -webkit-transform: scale(0, 0) rotateZ(90deg);
      transform: scale(0, 0) rotateZ(90deg);
      opacity: 0;
    }
  }
`;
export const SpanTitleContainer = styled.div`
  margin-top: -100px;
  color: grey;
  position: relative;
`;
export const StyledScrapesWrapper = styled.div`
  margin: auto;
  padding: 10px;
  text-align: left;
  padding-left p {
    letter-spacing: 1px;
  }
  span {
    font-size: 20px;
  }
`;
export const StyledWindowContainer = styled.div`
  .background-wrapper {
  }
  display: flex;
  overflow-x: hidden !important;
  flex-direction: column;
`;
export const StyledScraperWindow = styled.div`
  html {
    overflow: hidden;
  }
  canvas {
    cursor: none;
  }
  margin-top: 150px;
`;
export const StyledScrapesTitle = styled.div`
  color: silver;
  margin: 12px;
  text-shadow: 2px 2px 2px darkred;
`;

export const StyledSubtitle = styled.div`
  margin: 8px;
  color: silver;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px darkred;
  font-size: 22px;
`;

export const PastbinsContaienr = styled.div`
  display: flex;
  overflow: hidden;
  img {
    cursor: pointer;
    width: 430px;
    height: 240px;
    &:hover {
      --angle: 0deg;
      border: 3px solid;
      border-image: conic-gradient(
          from var(--angle),
          darkred,
          yellow,
          red,
          silver,
          darkred
        )
        1;

      animation: 10s rotate linear infinite;
      @keyframes rotate {
        to {
          --angle: 360deg;
        }
      }
    }
  }
`;
export const StrongholdButton = styled.div`
  margin: 10px;
  margin-top: 30px;
  background-color: white;
`;
export const DeeppasteButton = styled.div`
  margin: 10px;
  margin-top: 30px;
  background-color: white;
`;
