import React from 'react';
import { TagsInput } from './TagsInput';

export function HashtagInput({ elements, setElements }) {
  return (
    <div>
      <TagsInput tags={elements} setTags={setElements} />
    </div>
  );
}
