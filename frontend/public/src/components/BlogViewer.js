import React from 'react';
import ReactMarkdown from 'react-markdown';

function BlogViewer({ content }) {
  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default BlogViewer;