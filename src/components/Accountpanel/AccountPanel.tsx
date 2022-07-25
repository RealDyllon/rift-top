import {
  Box, Stack, Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import Link from 'next/link';

const menuOptions = [
  {
    name: 'Friends',
    href: '/friends',
  },
  {
    name: 'Change Password',
    href: '/change-password',
  },
  {
    name: 'Change Email',
    href: '/change-email',
  },

];

export const AccountPanel = () => (
  <Box m="2" rounded="xl" bg="grey.600" pb="1rem" pl="1" pr="1" shadow="dark-lg">
    <Stack>
      {menuOptions.map((option) => (
        <React.Fragment key={option.href}>
          <Box h="25px">
            <Link href={option.href}>
              <Text rounded="md" shadow="dark-lg" fontWeight="600" my={2} pl="2px" color="white">
                {option.name}
                <ChevronRightIcon />
              </Text>
            </Link>
          </Box>
        </React.Fragment>
      ))}
    </Stack>
  </Box>

);
