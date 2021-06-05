import styled from 'styled-components';
export const StyledHeader = styled.div`
  body {
    background-color: #010a00;
    background-image: url('https://www.transparenttextures.com/patterns/3px-tile.png');
    background-size: 200px 200px;
  }

  .logo {
    animation: pulse 2.5s infinite ease-in-out;
    position: relative;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    /*opacity: 0.8;*/
    font-size: 8.5vw;
    font-family: 'VT323', monospace;
    color: #cfc;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0f0, 0 0 40px #0f0,
      0 0 80px #0f0;
  }

  #wrap {
    width: 50%;
    display: inline-block;
    position: relative;
    left: 25%;
  }

  .grid:before {
    position: absolute;
    content: '';
    background-image: url('https://www.transparenttextures.com/patterns/3px-tile.png');
    background-size: 200px 200px;
    height: 100%;
    margin: auto;
    width: 100%;
    pointer-events: none;
  }

  @keyframes pulse {
    0% {
      text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 10px #0f0, 0 0 20px #0f0,
        0 0 40px #0f0;
    }
    /* For big glow */
    /* 	50% {
		text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 40px #0f0, 0 0 80px #0f0,
		0 0 160px #0f0;
	} */
    /* For small glow */
    50% {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0f0, 0 0 40px #0f0,
        0 0 80px #0f0;
    }
    100% {
      text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 10px #0f0, 0 0 20px #0f0,
        0 0 40px #0f0;
    }
  }
  position: relative;
  top: -120px;
`;
export const Wrapper = styled.div`
  height: 13.5vw;
  background-image: url('https://www.transparenttextures.com/patterns/3px-tile.png');
`;
