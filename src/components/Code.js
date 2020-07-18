import { Box, Image, List, ListItem, Flex } from '@chakra-ui/core';
import { BsBoxArrowInDown, BsCameraVideo } from 'react-icons/bs';
import Container from './Container';
import SubHeading from './SubHeading';
import HrefLink from './hrefLink';
import IconsHeading from './IconsHeading';
import IconLink from './IconLink';

const Code = () => (
  <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
    <Container>
      <Box>
        <Container>
          <Box maxW={400}>
            <Image src="code.png" alt="showing the pice of the code" />
          </Box>
        </Container>
      </Box>
      <Box maxW={400}>
        <SubHeading text="Edit <Code/>" />
        <List styleType="disc" color="gray.900" mb={4}>
          <ListItem>
            I Use VS Code as an editor as its light weight, as it uses plugin
            system. Installing too many plugin will lead to RAM consumption
          </ListItem>
          <ListItem>
            I am very particular about the extensions. I always do some research
            before installing so that it will consume less RAM
          </ListItem>
          <ListItem>
            Take a look at my{' '}
            <HrefLink
              text="gallery"
              link="https://github.com/pranavp10/devenv.now.sh/tree/master/gallery/vscode"
            />{' '}
            for more images, how it looks and feels to make our life more easier
            and focus on code rather than unwanted things
          </ListItem>
        </List>
        <IconsHeading text="Files Needed (Step 5)" icon={BsBoxArrowInDown} />
        <List ml="35px">
          <IconLink text="VS code" link="https://code.visualstudio.com/" />
        </List>
        <IconsHeading
          text="Install Ubuntu on VM (Step 6)"
          icon={BsCameraVideo}
        />
        <List ml="35px">
          <IconLink
            text="You Don't Know About VS Code"
            link="https://www.youtube.com/watch?reload=9&v=WHBQ1szkhtI&feature"
          />
        </List>
      </Box>
    </Container>
  </Flex>
);

export default Code;
