import { resolve } from 'path';
import { readFileSync } from 'fs';
import YAML from 'yaml';

const siteMetadata = YAML.parse(readFileSync(resolve(process.cwd(), 'site-metadata.yml'), 'utf-8'));

export const useSiteMetadata = jest.fn().mockReturnValue(siteMetadata);
