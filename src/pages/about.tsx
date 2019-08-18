import React from 'react';

import { useSiteMetadata } from '~/src/hooks/use-site-metadata';
import {
  Layout,
  Header,
  Footer,
} from '~/src/components';

const AboutPage: React.FC = () => {
  const siteMetadata = useSiteMetadata();
  return (
    <Layout>
      <Header fixed title={siteMetadata.title} />
      <Footer owner={siteMetadata.owner.name} />
    </Layout>
  );
};

export default AboutPage;
