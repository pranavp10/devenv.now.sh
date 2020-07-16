import { Heading, Stack, Box } from '@chakra-ui/core';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Hero = () => (
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
      <Heading as="h1" size="2xl" lineHeight={1} color="gray.900">
        Why
        <br />
        Dev .env ?
      </Heading>
      <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
        <Box display="inline" backgroundColor="#49fcd4">
          Dev.env
        </Box>{' '}
        will help you to setup the Development environment which will keep all
        the personl Directory and Development Directory different so that you can
        work fearlessly and feel like a real Developer
      </Box>
      <Stack mt={[0, 0, 8]} mb={[0, 0, 8]}>
        <Stack isInline>
          <Box
            as={IoMdCheckmarkCircleOutline}
            size="24px"
            color="#00BFA5"
            mr={0}
          />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Less Keystrokes
          </Heading>
        </Stack>
        <Stack isInline>
          <Box
            as={IoMdCheckmarkCircleOutline}
            size="24px"
            color="#00BFA5"
            mr={0}
          />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Backup & Move
          </Heading>
        </Stack>
        <Stack isInline>
          <Box
            as={IoMdCheckmarkCircleOutline}
            size="24px"
            color="#00BFA5"
            mr={0}
          />
          <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
            Pro Dev
          </Heading>
        </Stack>
      </Stack>
    </Box>
    <Box>
      <Stack>
        <Box>
          <Heading size="xl" fontWeight="extrabold" color="gray.900">
            Motivation
          </Heading>
          <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
            it took me a long way to figure things out so thought of sharing it
            so that it will be easy for the other, rather then search get every
            thing at one place
          </Box>
          <Heading size="xl" fontWeight="extrabold" color="gray.900">
            7 Steps
          </Heading>
          <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
            It take only 7 steps to Set the completely the Development
            environment
          </Box>
          <Heading size="xl" fontWeight="extrabold" color="gray.900">
            ~3.2 Hours
          </Heading>
          <Box color="gray.700" mb={4} fontSize="lg" maxW={400}>
            The time is approximate it may be more or less based on the
            individual System and speed of the internet
          </Box>
        </Box>
      </Stack>
    </Box>
  </Stack>
);

export default Hero;
