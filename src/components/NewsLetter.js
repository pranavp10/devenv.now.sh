import {
  InputRightElement,
  InputGroup,
  Stack,
  Button,
  Input,
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';

const NewsLetter = () => (
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
    <Box border="1px" rounded="md" borderColor="gray.200" p={5} bg="#dbfff9">
      <Heading size="md" m={2}>
        Subscribe to the newsletter
      </Heading>
      <Text m={2}>
        Get emails from me about web development, tech, and early access to new
        articles.
      </Text>
      <InputGroup size="md">
        <Input pr="4.5rem" type="email" placeholder="sundar@google.com" />
        <InputRightElement width="6rem">
          <Button h="1.75rem" size="sm" m={1}>
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  </Stack>
);
export default NewsLetter;
