import { Box, Flex } from '@chakra-ui/core';
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
  SEO,
} from '../components';

const Index = () => (
  <>
    <SEO />
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
