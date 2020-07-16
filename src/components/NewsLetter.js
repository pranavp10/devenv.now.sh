import {
  InputRightElement,
  InputGroup,
  Stack,
  Button,
  Input,
  Box,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/core';
import { useState, useRef } from 'react';

const NewsLetter = () => {
  const [Loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();
  const subscribe = async e => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    console.log(res);
    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    inputEl.current.value = '';
    toast({
      title: 'Success!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
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
        <Heading size="md" m={2} color="gray.900">
          Subscribe to the newsletter
        </Heading>
        <Text m={2} color="gray.900">
          Get emails from me about web development, tech, and early access to
          new articles.
        </Text>
        <InputGroup size="md" color="gray.900">
          <Input
            aria-label="Email for newsletter"
            pr="4.5rem"
            type="email"
            placeholder="sundar@abc.xyz"
            color="gray.900"
            ref={inputEl}
          />
          <InputRightElement width="6rem">
            <Button
              h="1.75rem"
              size="sm"
              m={1}
              isLoading={Loading}
              onClick={subscribe}
            >
              Subscribe
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Stack>
  );
};
export default NewsLetter;
