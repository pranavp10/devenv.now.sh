import { Stack, Box, Image } from '@chakra-ui/core';
import { GiProcessor } from 'react-icons/gi';

const Hero = () => (
  <Stack
    as="section"
    spacing={8}
    maxWidth="1000px"
    flexDirection={['column', 'column', 'row', 'row']}
    justifyContent="space-between"
    alignItems="center"
    width="100%"
    p={8}
    mt={[0, 0, 8]}
    mb={[0, 0, 8]}
    mx="auto"
  >
    <Box>Terminal.svg</Box>
    <Box>All details</Box>
  </Stack>
);

export default Hero;
