import { Box, Flex } from '@chakra-ui/core';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Why from '../components/Why';
import UbuntuInstallation from '../components/UbuntuInstallation';
import Terminal from '../components/Terminal';

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
      <Flex justifyContent="center" flexDirection="column">
        <Terminal />
      </Flex>
    </Box>
  </>
);

export default Index;
