import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onselectSortOrder: (sortOrder: string) => void;
}

export const SortSelector = ({ onselectSortOrder }: Props) => {
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
          {sortList.map((list) => (
            <MenuItem key={list.value}>{list.label}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
