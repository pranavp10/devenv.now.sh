import {
  Stack,
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/core';
import { RiBook3Line } from 'react-icons/ri';
import { BsCameraVideo } from 'react-icons/bs';
import Terminal from '../../public/terminal.svg';

const Hero = () => (
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
      <Box maxW={400}>
        <Heading color="gray.900">O My Terminal</Heading>
        <List styleType="disc" color="gray.900">
          <ListItem>
            Since I am using Ubuntu, I will be using terminal a lot. So I wanted
            the bash shell to be customized.
          </ListItem>
          <ListItem>
            ( because I am concerned about time, I wanted time to be reflected
            on my terminal and get many more features ) to make typing fast and
            easy, I came across{' '}
            <Link
              href="https://ohmyz.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>oh my zsh</b>
            </Link>{' '}
            to customize the bash shell and change it according to my
            requirement.
          </ListItem>
          <ListItem>
            I customized it by reading some blogs and watching some videos. Take
            a look at my{' '}
            <Link
              href="https://github.com/pranavp10/devenv.now.sh/tree/master/gallery/Terminal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>gallery</b>
            </Link>{' '}
            for more images and gif's
          </ListItem>
        </List>
        <Stack isInline mt={3}>
          <Box as={RiBook3Line} size="24px" color="gray.800" />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Read to Install o my zsh(Preferred)
          </Heading>
        </Stack>
        <List ml="35px">
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://linuxhint.com/install_zsh_shell_ubuntu_1804/"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              How to Install ZSH Shell
            </Link>{' '}
            <b>(Step 5)</b>
          </ListItem>
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://deepu.tech/configure-a-beautiful-terminal-on-unix/"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              A beautiful terminal with Zsh
            </Link>{' '}
            <b>(Step 6)</b>
          </ListItem>
        </List>
        <Stack isInline mt={3}>
          <Box as={BsCameraVideo} size="24px" color="gray.800" />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Install o my zsh
          </Heading>
        </Stack>
        <List ml="35px">
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://www.youtube.com/watch?v=MSPu-lYF-A8&t=58s"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              Learn Zsh in 80 Minutes
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://www.youtube.com/watch?v=tUkIHhdxnyM"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              ZSH Installation on Ubuntu 19.10 | 2020
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Stack
          as="section"
          spacing={8}
          maxWidth="1000px"
          flexDirection={['column', 'column', 'row', 'row']}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mt={[0, 0, 8]}
          mb={[0, 0, 8]}
          mx="auto"
        >
          <Terminal />
        </Stack>
      </Box>
    </Stack>
  </>
);

export default Hero;
