const axios = require('axios');

const GITHUB_REPO = 'https://raw.githubusercontent.com/xeeshanakram/markdown-blog-viewer/main/blogs';

exports.fetchMarkdownFiles = async () => {
  // Return list of markdown files (mocked for demo)
  return ['blog1.md', 'blog2.md'];
};

exports.fetchMarkdownContent = async (filename) => {
  const url = `${GITHUB_REPO}/${filename}`;
  const response = await axios.get(url);
  return response.data;
};