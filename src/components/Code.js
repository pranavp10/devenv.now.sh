import {
  Stack,
  Box,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/core';
import { BsBoxArrowInDown } from 'react-icons/bs';

const Code = () => (
  <>
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
      <Box>
        <Stack
          as="section"
          spacing={8}
          maxWidth="1000px"
          flexDirection={['column', 'column', 'row', 'row']}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          p={[0, 0, 8, 8]}
          mt={[0, 0, 8]}
          mb={[0, 0, 8]}
          mx="auto"
        >
          <Box maxW={400}>
            <Image src="code.png" alt="showing the pice of the code" />
          </Box>
        </Stack>
      </Box>
      <Box maxW={400}>
        <Heading color="gray.900">
          Edit {'<'}Code{'/>'}{' '}
        </Heading>
        <List styleType="disc" color="gray.900">
          <ListItem>
            I Use VS Code as an editor because its light weight, it becomes heavy
            when you install vscode extensions,support for different fonts and
            many more
          </ListItem>
          <ListItem>
            I am very particular about the extensions, so I always do some research
            before installing so that it will consume less RAM
          </ListItem>
          <ListItem>
            Take a look at my{' '}
            <Link
              href="https://github.com/pranavp10/devenv.now.sh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>gallery</b>
            </Link>{' '}
            for more images, how it looks and feels to make our life more easier and
            focus on code rather than unwanted things
          </ListItem>
        </List>
        <Stack isInline mt={3}>
          <Box as={BsBoxArrowInDown} size="24px" color="gray.800" />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Files Needed
          </Heading>
        </Stack>
        <List ml="35px">
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              visual studio code
            </Link>
          </ListItem>
        </List>
      </Box>
    </Stack>
  </>
);

export default Code;
