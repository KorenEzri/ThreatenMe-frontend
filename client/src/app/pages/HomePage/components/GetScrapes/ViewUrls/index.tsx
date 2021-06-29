import React, { useState, useEffect } from 'react';
import { PasteContainer, Link } from '../../../../StyledPaste';

export function ViewUrls({ pasteData }) {
  console.log(pasteData);
  return (
    <PasteContainer>
      {pasteData?.urls?.map((dataItem: any) => {
        return (
          <Link>
            <li>{dataItem}</li>
          </Link>
        );
      })}
    </PasteContainer>
  );
}
