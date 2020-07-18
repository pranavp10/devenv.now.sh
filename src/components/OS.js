import { Box, Icon, Flex, List, ListItem } from '@chakra-ui/core';
import { DiUbuntu } from 'react-icons/di';
import { GrVmware } from 'react-icons/gr';
import { BsCameraVideo, BsBoxArrowInDown } from 'react-icons/bs';
import SubHeading from './SubHeading';
import HrefLink from './hrefLink';
import IconsHeading from './IconsHeading';
import IconLink from './IconLink';
import Container from './Container';

const OS = () => (
  <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
    <Container flexDirection="column">
      <Box>
        <Container>
          <Flex direction="column" alignItems="center" ml={[0, 0, 65, 100]}>
            <Box bg="#ffff" p={2} rounded={25} shadow="xl">
              <Box as={DiUbuntu} size={125} color="red.400" />
            </Box>
            <Icon name="drag-handle" size="24px" m={5} color="gray.900" />
            <Box bg="#ffff" p={2} rounded={25} shadow="xl">
              <Box as={GrVmware} size={125} color="blue.400" p={4} />
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box maxW={400}>
        <SubHeading text="Operating System" />
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          <List styleType="disc">
            <ListItem>
              I personally prefer ubuntu as a Linux{' '}
              <HrefLink
                text="Distro"
                link="https://www.howtogeek.com/132624/htg-explains-whats-a-linux-distro-and-how-are-they-different/"
              />
              , The reason behind it is that there are no windows env variables
              setup,it supports all tools necessary things.
            </ListItem>
            <ListItem>
              I wanted <b>One Command Do Everything</b>, I know Command line is
              not easy but once you understand it, you will never feel like
              switching.
            </ListItem>
            <ListItem>
              Virtual Box is easy to configure and there are features like
              backup, snapshot and many more.
            </ListItem>
          </List>
        </Box>
        <IconsHeading text="Files Needed (Step 1)" icon={BsBoxArrowInDown} />
        <List ml="35px">
          <IconLink
            text="Ubuntu ISO"
            link="https://ubuntu.com/download/desktop/thank-you?version=20.04&architecture=amd64"
          />
          <IconLink
            text="Virtual Box"
            link="https://download.virtualbox.org/virtualbox/6.1.10/VirtualBox-6.1.10-138449-Win.exe"
          />
        </List>
        <IconsHeading text="Ubuntu on VM (Step 2)" icon={BsCameraVideo} />
        <List ml="35px">
          <IconLink
            text="Installation"
            link="https://www.youtube.com/watch?v=o00ZCTaVsCs"
          />
          <IconLink
            text="Issues & Fix"
            link="https://www.youtube.com/watch?v=QfCdx6wWkf8"
          />
        </List>
      </Box>
    </Container>
  </Flex>
);

export default OS;
