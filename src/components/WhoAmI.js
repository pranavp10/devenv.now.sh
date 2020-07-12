import {
  Stack,
  Heading,
  Box,
  Avatar,
  Text,
  PseudoBox,
  Flex,
} from '@chakra-ui/core';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaStripe } from 'react-icons/fa';

const WhoAmI = () => (
  <Stack
    as="section"
    spacing={8}
    maxWidth="1000px"
    flexDirection={['column', 'column', 'row', 'row']}
    justifyContent="center"
    alignItems="center"
    width="100%"
    p={8}
    mt={[0, 0, 8]}
    mb={[0, 0, 8]}
    mx="auto"
  >
    <Box>
      <Heading color="gray" mb={5}>
        Meet The Author
      </Heading>
      <PseudoBox
        color="gray.900"
        rounded={15}
        boxShadow="xl"
        textAlign="center"
        role="group"
      >
        <Avatar size="xl" name="Pranav Patel" src="" m={5} />
        <Heading>Pranav Patel</Heading>
        <Text color="gray.500" mb={5}>
          Software Engineer
        </Text>
        <Flex justifyContent="center">
          <Box as={AiFillLinkedin} size="32px" color="blue.400" m={2} />
          <Box as={AiOutlineTwitter} size="32px" color="green.400" m={2} />
        </Flex>
      </PseudoBox>
    </Box>
  </Stack>
);
export default WhoAmI;
