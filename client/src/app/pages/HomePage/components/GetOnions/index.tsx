import React, { useState, useEffect } from 'react';
import {
  StyledOnionWrapper,
  StyledOnionTitle,
  StyledOnionSecondaryTitle,
  StyledThirdOnionTitle,
  ThirdTitleTextWrapper,
} from './StyledGetOnionsSection';

export function GetOnions() {
  const [showSecondTitle, setShowSecondTitle] = useState(false);
  const [showThirdTitle, setShowThirdTitle] = useState(false);
  interface Timeouts {
    one: any;
    two: any;
  }
  let timeouts: Timeouts = {
    one: '',
    two: '',
  };
  useEffect(() => {
    timeouts.one = setTimeout(() => {
      setShowSecondTitle(true);
    }, 1500);
    timeouts.two = setTimeout(() => {
      setShowThirdTitle(true);
    }, 3500);
    return () => {
      clearTimeout(timeouts.one);
      clearTimeout(timeouts.two);
    };
  }, []);
  return (
    <StyledOnionWrapper>
      <StyledOnionTitle>
        <p>The hottest links</p>
      </StyledOnionTitle>
      {showSecondTitle && (
        <>
          <StyledOnionSecondaryTitle>
            <p>From the deepest of places</p>
          </StyledOnionSecondaryTitle>
          {showThirdTitle && (
            <StyledThirdOnionTitle>
              <span className="hoverCSS3">
                <ThirdTitleTextWrapper>
                  At your fingertips.
                </ThirdTitleTextWrapper>
              </span>
            </StyledThirdOnionTitle>
          )}
        </>
      )}
    </StyledOnionWrapper>
  );
}
