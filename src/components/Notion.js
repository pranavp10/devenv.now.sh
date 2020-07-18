import { Box, Image, List, ListItem, Flex } from '@chakra-ui/core';
import Container from './Container';
import SubHeading from './SubHeading';
import HrefLink from './hrefLink';

const Notion = () => (
  <Flex justifyContent="center" flexDirection="column">
    <Container>
      <Box>
        <Container>
          <Box maxW={400}>
            <Image src="notion.png" alt="showing the pice of the code" />
          </Box>
        </Container>
      </Box>
      <Box maxW={400}>
        <SubHeading text="Notion(Notes)" />
        <List styleType="disc" color="gray.900" mb={4}>
          <ListItem>
            Its Second brain all the thoughts and all the progress, development
            and many more will be written in this notes
          </ListItem>
          <ListItem>
            i had all the plans described for building the present website{' '}
            <b>devenv.now.sh</b>
          </ListItem>
          <ListItem>
            i use the mobile version as it is synced when every i open Laptop it
            will be synced go to this website{' '}
            <HrefLink text="website (Step 7)" link="https://www.notion.so/" />{' '}
            to read the feature their are hell lots of features
          </ListItem>
        </List>
      </Box>
    </Container>
  </Flex>
);

export default Notion;
