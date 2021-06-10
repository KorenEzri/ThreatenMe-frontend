import React, { useState } from 'react';
import {
  StyledScrapesWrapper,
  ScrapesContainer,
  SpanTitleContainer,
  StyledWindowContainer,
  StyledScraperWindow,
  StyledSpecialityWindow,
  StyledInline,
  StyledScrapesTitle,
  StyledSubtitle,
  ScrapeAWebSiteInput,
  ScrapeItButton,
  StrongholdButton,
  DeeppasteButton,
  PastbinsContaienr,
} from './StyledGetScrapesSection';
import deeppaste from './deeppaste.png';
import stronghold from './stronghold.png';

export function GetScrapes() {
  const [showSecondWindow, setShowSecondWindow] = useState(false);
  const [showThirdWindow, setShowThirdWindow] = useState(false);
  interface Timeouts {
    one: any;
    two: any;
  }
  let timeouts: Timeouts = {
    one: '',
    two: '',
  };

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
      <StyledWindowContainer>
        <StyledInline>
          <StyledSpecialityWindow>
            <StyledScrapesTitle>Scrapes-o-Matic</StyledScrapesTitle>
            <StyledSubtitle>
              The data you need. The data you want. The data you didn't know
              existed.
              <br />
              Anonymously.
            </StyledSubtitle>
            <ScrapeAWebSiteInput>
              <input type="text" placeholder="22tojepkdafgt7id.onion/all" />
              <input type="text" placeholder="HTML5 Selector" />
              <input type="text" placeholder="Attribute (optional)" />
              <ScrapeItButton>Scrape now</ScrapeItButton>
            </ScrapeAWebSiteInput>
          </StyledSpecialityWindow>
          <StyledScraperWindow>
            <StyledScrapesTitle>Scanalytico</StyledScrapesTitle>
            <StyledSubtitle>
              Collaborating together for a better tomorrow.
            </StyledSubtitle>
            <PastbinsContaienr>
              <StrongholdButton>
                <img src={deeppaste} alt="deep_paste" />
              </StrongholdButton>
              <DeeppasteButton>
                <img src={stronghold} alt="stronghold" />
              </DeeppasteButton>
            </PastbinsContaienr>
          </StyledScraperWindow>
        </StyledInline>
      </StyledWindowContainer>
    </>
  );
}
