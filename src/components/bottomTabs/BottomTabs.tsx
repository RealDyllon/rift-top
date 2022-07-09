import { Flex, Text } from '@chakra-ui/react';
import { AtSignIcon, ChatIcon, SettingsIcon } from '@chakra-ui/icons';
import ActiveLink from './useroute';

const tabIconProps = {
  w: 5,
  h: 6,

};

const tabs = [
  {
    name: 'Lobby',
    icon: <AtSignIcon {...tabIconProps} />,
  }, {
    name: 'Chats',
    icon: <ChatIcon {...tabIconProps} />,
  }, {
    name: 'Settings',
    icon: <SettingsIcon {...tabIconProps} />,
  },
];

export const BottomTabs = () => (
  <Flex
    position="fixed"
    bottom="0"
    width="100vw"
    justifyContent="space-around"
    boxShadow="dark-lg"
  >
    {tabs.map(({ name, icon }) => (
      <ActiveLink href={`/${name}`} key={name}>
        <Flex flexDirection="column" alignItems="center" key={name} m={2}>
          {icon}
          <Text fontSize="0.9rem" fontFamily="Caudex" >{name}</Text>
        </Flex>
      </ActiveLink>
    ))}
  </Flex>
);
