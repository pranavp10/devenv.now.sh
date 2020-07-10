import {
  Stack,
  Box,
  Icon,
  Heading,
  Flex,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/core';
import { DiUbuntu, DiWindows } from 'react-icons/di';
import { GrVmware } from 'react-icons/gr';
import {
  BsCameraVideo,
  BsBoxArrowInDown,
  BsArrowRight,
  BsArrowLeftRight,
} from 'react-icons/bs';

const UbuntuInstallation = () => (
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
          p={8}
          mt={[0, 0, 8]}
          mb={[0, 0, 8]}
          mx="auto"
        >
          <Flex direction="column" alignItems="center" ml={[0, 0, 65, 100]}>
            <Box bg="#ffff" p={2} rounded={25} shadow="xl">
              <Box as={DiUbuntu} size={125} color="red.400" />
            </Box>
            <Icon name="drag-handle" size="24px" m={5} color="gray.900" />
            <Box bg="#ffff" p={2} rounded={25} shadow="xl">
              <Box as={GrVmware} size={125} color="blue.400" p={4} />
            </Box>
          </Flex>
        </Stack>
      </Box>
      <Box maxW={400}>
        <Heading color="gray.900">My Thoughts</Heading>
        <List styleType="disc">
          <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
            <ListItem>
              I personally prefer ubuntu as a Linux{' '}
              <Box display="inline" backgroundColor="#49fcd4">
                <Link
                  href="https://www.howtogeek.com/132624/htg-explains-whats-a-linux-distro-and-how-are-they-different/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Distro
                </Link>
              </Box>
              , The reason behind is no windows env variables 🤯, support all
              tools etc. I wanted{' '}
              <Box display="inline" backgroundColor="#49fcd4">
                One Command Do Everything
              </Box>
              , yes Command line is not easy by one's you understand you will
              never leave it.
            </ListItem>
            <ListItem>
              Virtual Box is easy configure and features like backup, snapshot,
              copy-past(
              <Box
                as={DiWindows}
                size="24px"
                color="blue.800"
                display="inline"
              />
              <Box
                as={BsArrowLeftRight}
                size="20px"
                color="gray.800"
                display="inline"
              />
              <Box as={DiUbuntu} size="24px" color="red.400" display="inline" />
              )
            </ListItem>
          </Box>
        </List>
        <Stack isInline>
          <Box as={BsBoxArrowInDown} size="24px" color="gray.800" />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Files Needed
          </Heading>
        </Stack>
        <List ml="35px">
          <ListItem>
            <ListIcon icon={BsArrowRight} color="gray.900" />
            <Link
              color="red.500"
              href="https://ubuntu.com/download/desktop/thank-you?version=20.04&architecture=amd64"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ubuntu IOS
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon={BsArrowRight} color="gray.900" />
            <Link
              color="blue.500"
              href="https://download.virtualbox.org/virtualbox/6.1.10/VirtualBox-6.1.10-138449-Win.exe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtual Box
            </Link>
          </ListItem>
        </List>
        <Stack isInline>
          <Box as={BsCameraVideo} size="24px" color="gray.800" />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Install Ubuntu on Virtual Machine
          </Heading>
        </Stack>
        <List ml="35px">
          <ListItem>
            <ListIcon icon={BsArrowRight} color="gray.500" />
            <Link
              href="https://www.youtube.com/watch?v=o00ZCTaVsCs"
              target="_blank"
              rel="noopener noreferrer"
              backgroundColor="#49fcd4"
              color="gray.900"
            >
              Installation
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon={BsArrowRight} color="gray.500" />
            <Link
              href="https://www.youtube.com/watch?v=QfCdx6wWkf8"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
              backgroundColor="#49fcd4"
            >
              Issues & Fix
            </Link>
          </ListItem>
        </List>
      </Box>
    </Stack>
  </>
);

export default UbuntuInstallation;
