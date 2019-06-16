const path = require('path')
const fs = require('fs')
const YAML = require('yaml')
const siteMetadata = YAML.parse(fs.readFileSync(path.resolve(process.cwd(), 'site-metadata.yml'), 'utf-8'))

module.exports = {
    useSiteMetadata: jest.fn().mockReturnValue(siteMetadata)
}
