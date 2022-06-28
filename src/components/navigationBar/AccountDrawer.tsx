import {
  Avatar,
  AvatarBadge, Box, Divider,
  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text,
} from '@chakra-ui/react';
import React from 'react';

interface AccountDrawerProps {
    onClose: () => void;
    isOpen: boolean
}

const menuOptions = [
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Account',
    href: '/settings',
  },
  {
    name: 'Friends',
    href: '/friends',
  },
];

export const AccountDrawer = ({ onClose, isOpen } : AccountDrawerProps) => (
  <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent bg="#36393f">
      <DrawerHeader borderBottomWidth="1px">
        <Flex>
          <Avatar size="sm" me={2}>
            <AvatarBadge boxSize="1em" bg="teal.500" />
          </Avatar>
          <Text>Username</Text>
        </Flex>
      </DrawerHeader>
      <DrawerBody>
        {menuOptions.map((option) => (
          <React.Fragment key={option.href}>
            <Flex>
              <Text fontWeight="600" my={2}>{option.name}</Text>
            </Flex>
            {/* <Divider /> */}
          </React.Fragment>
        ))}
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
