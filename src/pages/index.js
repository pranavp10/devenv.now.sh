import { Box, Flex } from '@chakra-ui/core';
import { NextSeo } from 'next-seo';
import {
  Code,
  Footer,
  Hero,
  NewsLetter,
  Notion,
  OS,
  Who,
  Why,
  Terminal,
} from '../components';

const Index = () => (
  <>
    <NextSeo
      title="Developers environment"
      description="Setup Development environment which will keep all the person and Development Directory different so that you can work fearlessly and feel like a real Developer"
      canonical="https://devenv.now.sh/"
      openGraph={{
        url: 'https://devenv.now.sh/',
        title: 'Developers environment',
        description:
          'Setup Development environment which will keep all the person and Development Directory different so that you can work fearlessly and feel like a real Developer',
        images: [
          {
            url: 'https://devenv.now.sh/shareSEO.png',
            alt: 'SEO Image',
          },
        ],
        site_name: 'Development .env setup',
      }}
    />
    <Box as="main">
      <Hero />
      <Why />
      <OS />
      <Terminal />
      <Code />
      <Notion />
      <Who />
      <Flex justifyContent="center" flexDirection="column">
        <NewsLetter />
        <Footer />
      </Flex>
    </Box>
  </>
);

export default Index;
