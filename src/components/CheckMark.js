import { Stack, Box, Heading } from '@chakra-ui/core';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

const CheckMark = ({ text }) => (
  <Stack isInline mb={2}>
    <Box as={IoMdCheckmarkCircleOutline} size="24px" color="#00BFA5" mr={0} />
    <Heading ml={1} size="md" fontWeight="extrabold" color="gray.900">
      {text}
    </Heading>
  </Stack>
);
CheckMark.propTypes = { text: PropTypes.string };
export default CheckMark;
