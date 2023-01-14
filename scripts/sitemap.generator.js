const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
  baseUrl: 'https://opsspark.com',
  pagesDirectory: path.resolve(__dirname, '../pages/'),
  targetDirectory: 'static/seo',
  ignoredExtensions: ['png', 'jpg', 'svg'],
  ignoreIndexFiles: true,
  ignoredPaths: ['coming-soon', '[slug]'],
});
