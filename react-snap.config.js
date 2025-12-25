module.exports = {
  source: 'build',
  routes: ['/'],
  crawl: false,
  inlineCss: true,
  puppeteerArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu'
  ],
};
