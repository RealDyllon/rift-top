import { Flex, Text } from '@chakra-ui/react';
import { AtSignIcon, ChatIcon, SettingsIcon } from '@chakra-ui/icons';

const tabIconProps = {
  w: 5,
  h: 6,

};

const tabs = [
  {
    name: 'Rooms',
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
      <Flex flexDirection="column" alignItems="center" key={name} m={2} color="grey.100">
        {icon}
        <Text fontSize="0.9rem" fontFamily="Caudex" textColor="grey.200">{name}</Text>
      </Flex>
    ))}
  </Flex>
);
