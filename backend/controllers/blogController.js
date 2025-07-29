const githubService = require('../services/githubService');

exports.getBlogList = async (req, res) => {
  const files = await githubService.fetchMarkdownFiles();
  res.json(files);
};

exports.getBlogContent = async (req, res) => {
  const content = await githubService.fetchMarkdownContent(req.params.filename);
  res.send(content);
};