import { Heading, Stack, Box, Flex } from '@chakra-ui/core';
import CheckMark from './CheckMark';
import Container from './Container';
import SubHeading from './SubHeading';
import SubHeadingText from './SubHeadingText';

const Why = () => (
  <Flex justifyContent="center" flexDirection="column">
    <Container flexDirection="column">
      <Box>
        <Heading as="h1" size="2xl" lineHeight={1} color="gray.900">
          Why
          <br />
          Dev .env ?
        </Heading>
        <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
          <Box display="inline" backgroundColor="#49fcd4">
            Dev.env
          </Box>{' '}
          will help you setup the Development environment which will keep the
          personal Directory and Development Directory different so that you can
          work fearlessly and feel like a real Developer.
        </Box>
        <Stack mt={[0, 0, 8]} mb={[0, 0, 8]}>
          <CheckMark text="Less Keystrokes" />
          <CheckMark text="Backup & Move" />
          <CheckMark text="Pro Dev" />
        </Stack>
      </Box>
      <Box>
        <Stack>
          <SubHeading text="Motivation" />
          <SubHeadingText>
            It took me a long time to figure things out. I thought of sharing it
            with everyone, so that it would actually save some time. So instead
            of searching for different things at different places, one can find
            the <b>one stop solution</b> here.
          </SubHeadingText>
          <SubHeading text="7 Steps" />
          <SubHeadingText>
            It takes only 7 steps to Set the Development environment completely.
          </SubHeadingText>
          <SubHeading text="~3.2 Hours" />
          <SubHeadingText>
            The time required to set up the environment is approximately 3.2
            hours, more or less based on individual's system and internet speed.
          </SubHeadingText>
        </Stack>
      </Box>
    </Container>
  </Flex>
);

export default Why;
