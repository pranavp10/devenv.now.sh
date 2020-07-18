import { Heading, Flex, Box, Image } from '@chakra-ui/core';
import Container from './Container';
import HeroContainer from './HeroContainer';

const Hero = () => (
  <Flex justifyContent="center" flexDirection="column" bg="#49fcd4">
    <HeroContainer>
      <Container>
        <Box>
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h1"
            size="2xl"
            fontWeight="bold"
            color="gray.900"
          >
            Development
            <Box>
              .env{' '}
              <Box display="inline" backgroundColor="#49fcd4">
                setup
              </Box>
            </Box>
          </Heading>
          <Box color="gray.700" mb={4} fontSize="lg">
            Increase the Development{' '}
            <Box display="inline" backgroundColor="#49fcd4">
              Productivity by 10x
            </Box>
          </Box>
        </Box>
        <Box mt={-10}>
          <Image src="env.png" alt="Env logo" />
        </Box>
      </Container>
    </HeroContainer>
  </Flex>
);

export default Hero;
