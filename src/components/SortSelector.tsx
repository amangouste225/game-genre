import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

export const SortSelector = () => {
  const sortList = [
    { value: '', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Realeased date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average ratings' },
  ];

  return (
    <div>
      <Menu>
        <MenuButton
          className='selector'
          borderRadius='10'
          as={Button}
          rightIcon={<BsChevronDown />}
          borderWidth='2px'
          px={20}
          py={6}
        >
          Order by: <b>Relevance</b>
        </MenuButton>
        <MenuList px={20} py={10} bg='#fffff0' borderRadius='10'>
          {sortList.map((list) => (
            <MenuItem key={list.value}>{list.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
