import {
  Avatar,
  AvatarBadge,
  Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface AccountDrawerProps {
    onClose: () => void;
    isOpen: boolean
}

const menuOptions = [

  {
    name: 'Account',
    href: '/profile',
  },
  {
    name: 'Characters',
    href: '/characters',
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
              <Link href={option.href}>
                <Text fontWeight="600" my={2}>{option.name}</Text>
              </Link>
            </Flex>
          </React.Fragment>
        ))}
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
