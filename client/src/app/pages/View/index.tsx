import React from 'react';

import { PasteContainer } from '../StyledPaste';

export function View({ scrapeData }) {
  console.log(scrapeData);
  if (!Object.keys(scrapeData)[0] || !scrapeData || !Array.isArray(scrapeData))
    return null;
  return (
    <PasteContainer>
      {scrapeData.map(
        (dataItem: { from: string; data: string; depth?: number }) => {
          return (
            <li>
              {
                <>
                  <p>From: {dataItem.from}</p>
                  <p>Data: {dataItem.data}</p>
                  {dataItem.depth && <p>Depth: {dataItem.depth}</p>}
                </>
              }
            </li>
          );
        },
      )}
    </PasteContainer>
  );
}
