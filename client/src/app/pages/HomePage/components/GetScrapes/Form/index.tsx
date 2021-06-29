import React, { useState } from 'react';
import { network, routes } from '../../../../../network';
import { useForm } from 'react-hook-form';
import {
  ScrapeAWebSiteInput,
  ScrapeItButton,
  MinimalFormContainer,
  AdvancedFormContainer,
  AdvancedFormWrapper,
  StyledRequiredSpan,
} from './FormStyles';
export function Form({ setError, setShowSpinner, setScrapes }) {
  const [elements, setElements] = useState({ tags: [''] });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const submitForm = async data => {
    const {
      attribute,
      delay,
      extraPages,
      parser,
      selector,
      secondselector,
      url,
      limit,
    } = data;
    const options = {
      attribute,
      delay,
      extraPages,
      parser,
      selector,
      secondselector,
      url,
      limit,
    };
    try {
      setShowSpinner(true);
      const res = await network.post(routes.scrape, { options });
      setScrapes(res.data);
      setShowSpinner(false);
      console.log(res.data);
    } catch ({ message }) {
      setError(message);
      setShowSpinner(false);
    }
  };

  return (
    <>
      <ScrapeAWebSiteInput>
        <form onSubmit={handleSubmit(submitForm)}>
          <MinimalFormContainer>
            <p>
              <StyledRequiredSpan>*</StyledRequiredSpan> = required
            </p>
            <label>
              Url: foo.com/bar.org/foobar.onion, etc..
              <StyledRequiredSpan>*</StyledRequiredSpan>
            </label>
            <input
              type="text"
              {...register('url', { required: true })}
              placeholder="22tojepkdafgt7id.onion/all"
            />
            <label>
              Selector: div.class, div{'>'}p.class, etc..
              <StyledRequiredSpan>*</StyledRequiredSpan>
            </label>
            <input
              type="text"
              {...register('selector', { required: true })}
              placeholder="HTML5 Selector"
            />
            <label>Atribute: textContent, href, src, etc..</label>
            <input
              type="text"
              {...register('attribute')}
              placeholder="Attribute (optional)"
            />
          </MinimalFormContainer>
          <AdvancedFormWrapper>
            <AdvancedFormContainer>
              <p>Advanced</p>
              <label>Link depth - how deep to go when link scraping?</label>
              <input type="number" {...register('extraPages')} />
              <label>Parser function</label>
              <input
                type="text"
                {...register('parser')}
                placeholder="data => data.split('\n').map(splat)=>{...}"
              />
              <label>
                Secondary selector (for example, if first selector is for links,
                this selector will get the relevant element's data from each
                link
              </label>
              <input
                type="text"
                {...register('secondselector')}
                placeholder="div.content"
              />
              <label>
                Limit: how many scrapes per webpage to get? Default is 20.
              </label>
              <input
                type="number"
                {...register('limit')}
                placeholder="Limit (optional)"
              />
            </AdvancedFormContainer>
          </AdvancedFormWrapper>
          <ScrapeItButton
            type="submit"
            onKeyPress={e => {
              e.preventDefault();
            }}
          >
            Scrape now
          </ScrapeItButton>
        </form>
      </ScrapeAWebSiteInput>
    </>
  );
}
