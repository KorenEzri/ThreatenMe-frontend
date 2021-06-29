import React, { useState } from 'react';
import { StyledTaglist } from './StyledTaglist';
import { PlusIcon } from './PlusIcon';

export function TagsInput({ tags, setTags }) {
  const [textValue, setTextValue] = useState('');
  const handleTextChange = (e: { target: { value: string } }) => {
    setTextValue(e.target.value);
  };
  const handleKeyup = (event: { key: any }) => {
    const key = event.key;
    if (key === 'Enter' || key === ',') {
      addTag();
    }
  };
  const handleKeyDown = (event: { key: any }) => {
    const key = event.key;
    if (key === 'Backspace' && !textValue) {
      editPrevTag();
    }
  };
  const addTag = () => {
    let tag = textValue.trim();
    tag = tag.replace(/,/g, '');
    if (!tag) {
      return;
    }
    const taglist = tags.tags;
    const newTaglist = taglist.concat([tag]);
    setTags({ tags: newTaglist });
    setTextValue('');
  };
  const editPrevTag = () => {
    const taglist = tags.tags;
    const tag = taglist.pop();
    setTags({ tags: taglist });
    if (tag) setTextValue(tag);
  };
  const removeTag = e => {
    const tag = e.target.innerText;
    const taglist = tags.tags;
    const newTaglist = taglist.filter(oldTag => oldTag !== tag);
    setTags({ tags: newTaglist });
  };

  return (
    <div>
      <StyledTaglist>
        <ul>
          {tags?.tags?.map((tag, i) => {
            if (tag === '') return null;
            return (
              <li
                key={`${tag}, ${i}` + Math.random() * 12}
                onClick={e => {
                  removeTag(e);
                }}
              >
                {tag}
              </li>
            );
          })}
        </ul>
      </StyledTaglist>
      <input
        type="text"
        placeholder="Enter to add selectors..."
        value={textValue}
        onChange={handleTextChange}
        onKeyUp={handleKeyup}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
