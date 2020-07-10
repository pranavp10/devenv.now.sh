import { useColorMode, IconButton } from '@chakra-ui/core';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        variantColor="gray"
        aria-label={colorMode === 'light' ? 'moon' : 'sun'}
        size="md"
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
      />
    </>
  );
};

export default ColorModeSwitch;
