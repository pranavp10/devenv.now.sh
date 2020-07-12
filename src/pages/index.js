import { Box, Flex } from '@chakra-ui/core';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Why from '../components/Why';
import UbuntuInstallation from '../components/UbuntuInstallation';
import Terminal from '../components/Terminal';
import Code from '../components/Code';
import WhoAmI from '../components/WhoAmI';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Index = () => (
  <>
    <Box as="main">
      <Flex justifyContent="center" flexDirection="column" bg="#49fcd4">
        <Container>
          <Hero />
        </Container>
      </Flex>
      <Flex justifyContent="center" flexDirection="column">
        <Why />
      </Flex>
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <UbuntuInstallation />
      </Flex>
      <Flex flexDirection="column">
        <Terminal />
      </Flex>
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <Code />
      </Flex>
      <Flex flexDirection="column">
        <WhoAmI />
      </Flex>
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <NewsLetter />
        <Footer />
      </Flex>
    </Box>
  </>
);

export default Index;
