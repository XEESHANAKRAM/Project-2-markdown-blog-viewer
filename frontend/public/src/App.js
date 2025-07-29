import React, { useEffect, useState } from 'react';
import BlogList from './components/BlogList';
import BlogViewer from './components/BlogViewer';
import './styles.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  const fetchContent = (filename) => {
    fetch(`http://localhost:5000/api/blogs/${filename}`)
      .then(res => res.text())
      .then(setContent);
  };

  return (
    <div className="app">
      <BlogList blogs={blogs} onSelect={fetchContent} />
      <BlogViewer content={content} />
    </div>
  );
}

export default App;