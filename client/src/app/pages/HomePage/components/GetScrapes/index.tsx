import React from 'react';
import {
  StyledScrapesWrapper,
  ScrapesContainer,
  SpanTitleContainer,
  StyledScraperWindow,
  StyledScrapesTitle,
  StyledSubtitle,
  DeeppasteButton,
  PastbinsContaienr,
} from './StyledGetScrapesSection';
import { Form } from './Form';
import { useHistory } from 'react-router-dom';
import stronghold from './stronghold.png';

export function GetScrapes({ setError, setShowSpinner, setScrapes }) {
  const history = useHistory();
  return (
    <>
      <ScrapesContainer>
        <StyledScrapesWrapper>
          <div className="box">
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
          <p>Deep Dive</p>
          <SpanTitleContainer>
            <span>
              Into the edges of the biggest information center known to man.
            </span>
          </SpanTitleContainer>
        </StyledScrapesWrapper>
      </ScrapesContainer>
      <StyledScrapesTitle>Scrapes-o-Matic</StyledScrapesTitle>
      <StyledSubtitle>
        The data you need. The data you want. The data you didn't know existed.
        <br />
        Anonymously.
      </StyledSubtitle>
      <Form
        setError={setError}
        setShowSpinner={setShowSpinner}
        setScrapes={setScrapes}
      />
      <StyledScraperWindow>
        <StyledScrapesTitle>Scanalytico</StyledScrapesTitle>
        <StyledSubtitle>
          Collaborating together for a better tomorrow.
        </StyledSubtitle>
        <PastbinsContaienr>
          <DeeppasteButton>
            <img
              src={stronghold}
              alt="stronghold"
              onClick={() => {
                history.push('/stronghold');
              }}
            />
          </DeeppasteButton>
        </PastbinsContaienr>
      </StyledScraperWindow>
    </>
  );
}
