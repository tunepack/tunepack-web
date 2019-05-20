const sm = require('sitemap')
const fs = require('fs')
const path = require('path')
const paths = require('./utils/paths')
const log = require('./utils/log')

const { URL } = process.env

if (!URL) {
  throw new Error('URL env var was not specified')
}

const DEFAULT_PAGES = [
  ''
]

const createSitemap = async () => {
  const defaultPagesUrls = DEFAULT_PAGES.map(url => ({
    url: `/${url}`,
    changefreq: 'weekly',
    priority: 0.1
  }))

  const sitemap = sm.createSitemap({
    hostname: URL,
    cacheTime: 600000,
    urls: [
      ...defaultPagesUrls
    ]
  })

  fs.writeFileSync(path.join(paths.distPath, 'sitemap.xml'), sitemap.toString())
  log.info('Sitemap created.')
}

createSitemap()
