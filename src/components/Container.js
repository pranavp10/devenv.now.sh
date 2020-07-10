import React from 'react';
import NextLink from 'next/link';
import { Flex, Box, Collapse } from '@chakra-ui/core';
import { DiTerminal } from 'react-icons/di';
import ColorModeSwitch from './ColorModeSwitch';

const Container = ({ children }) => (
  <>
    <Box bg="#49fcd4">
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1000px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 0, 8]}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Box as="a">
            <Box as={DiTerminal} size="42px" color="gray.900" />
          </Box>
        </NextLink>
        {/* <ColorModeSwitch /> */}
      </Flex>
    </Box>
    {children}
  </>
);
export default Container;
