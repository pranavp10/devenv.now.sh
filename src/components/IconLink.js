import { ListItem, ListIcon } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import HrefLink from './hrefLink';

const IconLink = ({ text, link }) => (
  <ListItem>
    <ListIcon icon="link" color="gray.900" />
    <HrefLink text={text} link={link} />
  </ListItem>
);
IconLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
export default IconLink;
