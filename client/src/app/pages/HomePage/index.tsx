import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  StyledHomepage,
  StyledSectionWrapper,
  GetPastesContainer,
} from './StyledHomepage';
import { GetOnions, GetScrapes } from './components';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="ThreatenMe - Prevent the next tragedy"
        />
      </Helmet>
      <StyledHomepage>
        <StyledSectionWrapper>
          <GetOnions />
          <GetPastesContainer>
            <GetScrapes />
          </GetPastesContainer>
        </StyledSectionWrapper>
      </StyledHomepage>
    </>
  );
}
