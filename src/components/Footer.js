import { Stack, Text, Flex, Box } from '@chakra-ui/core';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => (
  <>
    <Stack
      as="section"
      spacing={8}
      maxWidth="650px"
      flexDirection={['column', 'column', 'row', 'row']}
      justifyContent="space-between"
      width="100%"
      mb={[0, 0, 8]}
      mx="auto"
    >
      <Text>
        <b>No &copy; copyright issues</b>
      </Text>
      <Stack isInline>
        <Box as={AiFillGithub} size="24px" color="blue.400" />
      </Stack>
    </Stack>
  </>
);

export default Footer;
