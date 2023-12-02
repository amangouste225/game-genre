import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export const SortSelector = ({ onSortOrder, sortOrder }: Props) => {
  const sortList = [
    { value: '', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Realeased date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average ratings' },
  ];

  const current = sortList.find((order) => order.value === sortOrder);

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
          Order by : <b>{current?.label || 'Relevance'}</b>
        </MenuButton>
        <MenuList px={20} py={10} bg='#fffff0' borderRadius='10'>
          {sortList.map((list) => (
            <MenuItem key={list.value} onClick={() => onSortOrder(list.value)}>
              {list.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};
