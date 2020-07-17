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
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          <List styleType="disc">
            <ListItem>
              I personally prefer ubuntu as a Linux{' '}
              <Link
                href="https://www.howtogeek.com/132624/htg-explains-whats-a-linux-distro-and-how-are-they-different/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>Distro</b>
              </Link>
              , The reason behind it is that there are no windows env variables
              setup,it supports all tools necessary things.
            </ListItem>
            <ListItem>
              I wanted <b>One Command Do Everything</b>, I know Command line is
              not easy by once you understand it, you will never like switching.
            </ListItem>
            <ListItem>
              Virtual Box is easy to configure and there are features like
              backup, snapshot, copy-paste(
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
          </List>
        </Box>
        <Stack isInline>
          <Box as={BsBoxArrowInDown} size="24px" color="gray.800" />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Files Needed
          </Heading>
        </Stack>
        <List ml="35px">
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://ubuntu.com/download/desktop/thank-you?version=20.04&architecture=amd64"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              Ubuntu ISO
            </Link>{' '}
            <b>(Step 1)</b>
          </ListItem>
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://download.virtualbox.org/virtualbox/6.1.10/VirtualBox-6.1.10-138449-Win.exe"
              target="_blank"
              color="gray.900"
              rel="noopener noreferrer"
            >
              Virtual Box
            </Link>{' '}
            <b>(Step 2)</b>
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
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://www.youtube.com/watch?v=o00ZCTaVsCs"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              Installation
            </Link>{' '}
            <b>(Step 3)</b>
          </ListItem>
          <ListItem>
            <ListIcon icon="link" color="gray.900" />
            <Link
              href="https://www.youtube.com/watch?v=QfCdx6wWkf8"
              target="_blank"
              rel="noopener noreferrer"
              color="gray.900"
            >
              Issues & Fix
            </Link>{' '}
            <b>(Step 4)</b>
          </ListItem>
        </List>
      </Box>
    </Stack>
  </>
);

export default UbuntuInstallation;
