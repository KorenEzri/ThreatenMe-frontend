import React, { useState, useEffect } from 'react';
import { network, routes } from '../../network';
import { PasteContainer } from '../StyledPaste';

export function Stronghold() {
  const [pasteData, setPasteData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await network.get(routes.database.stronghold);
      setPasteData(data);
    })();
  });
  return (
    <PasteContainer>
      {pasteData?.map((paste: any) => {
        return (
          <li>
            {paste.checked
              ? "This paste was checked for suspicion. It's overall threat level is: "
              : 'This paste is yet to have been checked.'}
            {paste.threat_level > 3 ? (
              <span>{paste.threat_level}</span>
            ) : (
              paste.threat_level
            )}
            <div>
              <p>Source: {paste.source}</p>
              <p>Title: {paste.title}</p>
              <p>{paste.body}</p>
              <p>Language: {paste.language}</p>
              <p>{paste.posted_by}</p>
            </div>
            {paste.badwords?.map((word: string) => {
              return <label>{word}</label>;
            })}
          </li>
        );
      })}
    </PasteContainer>
  );
}
