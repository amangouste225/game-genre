import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';

import Platform from '../hooks/useGames';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

export const IconsList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className='flex gap-2'>
      {platforms.map((platform) => (
        <Icon as={iconsMap[platform.slug]} />
      ))}
    </div>
  );
};
