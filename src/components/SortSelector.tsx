import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export const SortSelector = () => {
  return (
    <div>
      <Menu>
        <MenuButton
          borderRadius='10'
          as={Button}
          rightIcon={<BsChevronDown />}
          borderWidth='2px'
          px={20}
          py={6}
        >
          Order by: Relevance
        </MenuButton>
        <MenuList px={20} py={10} bg='#fffff0' borderRadius='10'>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Relevance</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
