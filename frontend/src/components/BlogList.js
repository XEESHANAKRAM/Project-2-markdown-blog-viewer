import React from 'react';

function BlogList({ blogs, onSelect }) {
  return (
    <ul>
      {blogs.map(blog => (
        <li key={blog} onClick={() => onSelect(blog)}>{blog}</li>
      ))}
    </ul>
  );
}

export default BlogList;