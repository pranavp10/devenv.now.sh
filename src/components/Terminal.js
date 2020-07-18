import { Box, List, ListItem, Flex } from '@chakra-ui/core';
import { RiBook3Line } from 'react-icons/ri';
import { BsCameraVideo } from 'react-icons/bs';
import TerminalSVG from '../../public/terminal.svg';
import Container from './Container';
import SubHeading from './SubHeading';
import HrefLink from './hrefLink';
import IconsHeading from './IconsHeading';
import IconLink from './IconLink';

const Terminal = () => (
  <Flex flexDirection="column">
    <Container flexDirection="column-reverse">
      <Box maxW={400}>
        <SubHeading text="Terminal" />
        <List styleType="disc" color="gray.900" mb={4}>
          <ListItem>
            Since I am using Ubuntu, I will be using terminal a lot. So I wanted
            the bash shell to be customized.
          </ListItem>
          <ListItem>
            ( because I am concerned about time, I wanted time to be reflected
            on my terminal and get many more features ) to make typing fast and
            easy, I came across{' '}
            <HrefLink text="oh my zsh" link="https://ohmyz.sh/" /> to customize
            the bash shell and change it according to my requirement.
          </ListItem>
          <ListItem>
            I customized it by reading some blogs and watching some videos. Take
            a look at my{' '}
            <HrefLink
              text="gallery"
              link="https://github.com/pranavp10/devenv.now.sh/tree/master/gallery/Terminal"
            />{' '}
            for more images and gif's
          </ListItem>
        </List>
        <IconsHeading
          text="Read to Install o my zsh (Step 3)"
          icon={RiBook3Line}
        />
        <List ml="35px">
          <IconLink
            text="How to Install ZSH Shell"
            link="https://linuxhint.com/install_zsh_shell_ubuntu_1804/"
          />
          <IconLink
            text="A beautiful terminal with Zsh"
            link="https://deepu.tech/configure-a-beautiful-terminal-on-unix/"
          />
        </List>
        <IconsHeading text="Install o my zsh (Step 4)" icon={BsCameraVideo} />
        <List ml="35px">
          <IconLink
            text="Learn Zsh in 80 Minutes"
            link="https://www.youtube.com/watch?v=MSPu-lYF-A8&t=58s"
          />
          <IconLink
            text="ZSH Installation on Ubuntu 19.10 | 2020"
            link="https://www.youtube.com/watch?v=tUkIHhdxnyM"
          />
        </List>
      </Box>
      <Box>
        <Container>
          <TerminalSVG />
        </Container>
      </Box>
    </Container>
  </Flex>
);

export default Terminal;
