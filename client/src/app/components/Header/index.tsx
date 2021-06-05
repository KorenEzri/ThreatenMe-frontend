import React from 'react';
import { StyledHeader , Wrapper} from './StyledHeader';

export function Header() {
  return (
    <Wrapper>
    <StyledHeader>
      <br />
      <br />
      <br />
      <br />
      <br />
      <a href="/">
        <div id="wrap">
          <div className="grid logo">Scrape.net</div>
        </div>
      </a>
    </StyledHeader>
    </Wrapper>
  );
}
