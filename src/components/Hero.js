import { Heading, Stack, Box, Image } from '@chakra-ui/core';

const Hero = () => (
  <Stack
    as="section"
    spacing={8}
    maxWidth="800px"
    flexDirection={['column', 'column', 'row', 'row']}
    justifyContent="space-between"
    alignItems="center"
    width="100%"
    p={8}
    mt={[0, 0, 8]}
    mb={[0, 0, 8]}
    mx="auto"
  >
    <Box>
      <Heading
        letterSpacing="tight"
        mb={4}
        as="h1"
        size="2xl"
        fontWeight="bold"
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
  </Stack>
);

export default Hero;
