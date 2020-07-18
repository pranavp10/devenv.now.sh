import { Stack } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
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
    {children}
  </Stack>
);
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
