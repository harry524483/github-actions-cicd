module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/harry524483/github-actions-cicd',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
};
