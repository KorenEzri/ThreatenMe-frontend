import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { View } from '../View';
import { Spinner } from '../../components';
import {
  StyledHomepage,
  StyledSectionWrapper,
  GetPastesContainer,
} from './StyledHomepage';
import { GetOnions, GetScrapes } from './components';

export function HomePage() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState('');
  const [scrape, setScrapes] = useState([]);
  return (
    <Spinner VisualComponent={''} error={error} show={showSpinner}>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="ThreatenMe - Prevent the next tragedy"
        />
      </Helmet>
      {!scrape.length ? (
        <StyledHomepage>
          <StyledSectionWrapper>
            <GetOnions />
            <GetPastesContainer>
              <GetScrapes
                setError={setError}
                setShowSpinner={setShowSpinner}
                setScrapes={setScrapes}
              />
            </GetPastesContainer>
          </StyledSectionWrapper>
        </StyledHomepage>
      ) : (
        <View scrapeData={scrape} />
      )}
    </Spinner>
  );
}
