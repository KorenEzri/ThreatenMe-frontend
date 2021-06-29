import { Spinner } from '../../components';
import React, { useEffect, useState } from 'react';
import { network, routes } from '../../network';
export function Onions() {
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState('');
  const [links, setLinks] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setShowSpinner(true);
        const { data } = await network.get(routes.onion.allUrls);
        setLinks(data.urls);
        console.log(links);
        setShowSpinner(false);
      } catch ({ message }) {
        setError(message);
        setShowSpinner(false);
      }
    })();
    // eslint-disable-next-line
  }, []);
  return (
    <Spinner error={error} show={showSpinner} VisualComponent={''}>
      <div>
        {links?.map(link => {
          return (
            <div>
              <p>
                <a href={link}>{link}</a>
              </p>
            </div>
          );
        })}
      </div>
    </Spinner>
  );
}
