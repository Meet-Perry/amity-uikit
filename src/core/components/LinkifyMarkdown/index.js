import React from 'react';
import sanitize from 'sanitize-html';

const MARKDOWN_LINK_REGEX = /\[([^\\[]+)\]\(?(\S*)?\)/gm;

const Markdown = ({ children }) => {
  const content = children.replace(MARKDOWN_LINK_REGEX, '<a href="$2">$1</a>');
  return <span dangerouslySetInnerHTML={{ __html: sanitize(content) }} />; // eslint-disable-line react/no-danger
};

export default Markdown;
