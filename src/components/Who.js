import { Stack, Heading, Box, Avatar, Text, Flex, Link } from '@chakra-ui/core';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Container from './Container';
import CheckMark from './CheckMark';
import HrefIconLink from './hrefIconLink';

const Who = () => (
  <Flex flexDirection="column" bg="#FBFBFB">
    <Container flexDirection="column">
      <Box>
        <Heading as="h1" size="2xl" lineHeight={1} color="gray.900" mb={5}>
          Who Is This
          <br />
          For ?
        </Heading>
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          If you are still not sure that its for you or not, then{' '}
          <Link href="mailto:pranavkp.me@outlook.com">
            <b>email me</b>
          </Link>{' '}
          and ask
        </Box>
        <Stack mt={[0, 0, 8]} mb={[0, 0, 8]}>
          <CheckMark text="Beginners" />
          <CheckMark text="Command Line" />
          <CheckMark text="Dev & Software Engineer" />
          <CheckMark text="Open Source Contributors" />
        </Stack>
      </Box>
      <Box textAlign="center">
        <Box>
          <Avatar size="xl" name="Pranav Patel" src="author.jpeg" m={5} />
          <Text>Meet The Author</Text>
        </Box>
        <Heading color="gray.900">Pranav Patel</Heading>
        <Text color="gray.500" mb={5}>
          Software Engineer
        </Text>
        <Text color="gray.500" mb={5} maxW={300}>
          JavaScript, React, Design Systems, a software engineer by passion,
          loves solving problems. Most loved thing in js is the closure
          property, figuring out life's purpose.
        </Text>
        <Flex justifyContent="center">
          <HrefIconLink
            icon={AiFillLinkedin}
            link="https://www.linkedin.com/in/pranav-p-241914183"
          />
          <HrefIconLink
            icon={AiOutlineTwitter}
            link="https://twitter.com/thatspranav"
          />
        </Flex>
      </Box>
    </Container>
  </Flex>
);
export default Who;
