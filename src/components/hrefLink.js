import { Link } from '@chakra-ui/core';
import PropTypes from 'prop-types';

const HrefLink = ({ text, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer" color="gray.900">
    <b>{text}</b>
  </Link>
);
HrefLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
export default HrefLink;
