import { Box, Flex } from '@chakra-ui/core';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Why from '../components/Why';
import UbuntuInstallation from '../components/UbuntuInstallation';

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
    </Box>
  </>
);

export default Index;
