import { Stack, Box, Heading } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const HrefLink = ({ text, icon }) => (
  <Stack isInline>
    <Box as={icon} size="24px" color="gray.800" />
    <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
      {text}
    </Heading>
  </Stack>
);
HrefLink.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
};
export default HrefLink;
