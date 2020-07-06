import { Box, Flex } from '@chakra-ui/core';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Why from '../components/Why';

const Index = () => (
  <>
    <Box as="main">
      <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
        <Container>
          <Hero />
        </Container>
      </Flex>
      <Flex justifyContent="center" flexDirection="column">
        <Why />
      </Flex>
    </Box>
  </>
);

export default Index;
