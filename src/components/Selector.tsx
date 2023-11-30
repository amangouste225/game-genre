import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Platform from '../hooks/useGames';
import { usePlatforms } from '../hooks/usePlateforms';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
  handleClick: () => void;
}

export const Selector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  const handleClick = (platform) => {
    onSelectPlatform(platform);
  };

  return (
    <div className='absolute top-0 mb-10 pb-10  z-50'>
      <Menu>
        <MenuButton
          borderRadius='10'
          as={Button}
          rightIcon={<BsChevronDown />}
          borderWidth='2px'
          px={20}
          py={10}
          colorScheme='pink'
          _focus={{ boxShadow: 'outline' }}
        >
          {' '}
          {selectedPlatform?.name || 'Platforms'}{' '}
        </MenuButton>
        <MenuList px={20} py={10} bg='gray' borderRadius='10'>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => handleClick(platform)}
              _hover={{ bg: 'transparent' }}
            >
              <Button paddingY='3'>{platform.name}</Button>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>

    // <div className='absolute top-0 mb-10 pb-10  z-50'>
    //   <details className='dropdown'>
    //     <summary className='m-1 btn w-52 bg-base-300'>
    //       {selectedPlatform?.name || 'Platforms'}{' '}
    //     </summary>

    //     <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
    //       {data.map((platform) => (
    //         <li key={platform.id}>
    //           <button
    //             onClick={() => {
    //               console.log(platform.name);

    //               return handleClick(platform);
    //             }}
    //           >
    //             {platform.name}
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   </details>
    // </div>
  );
};
