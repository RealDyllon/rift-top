import {
  Avatar, AvatarBadge, Flex, Heading, Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { AccountDrawer } from './AccountDrawer';

interface NavigationBarProps {
  title: string
}

export const NavigationBar = ({ title } : NavigationBarProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Flex
      alignItems="center"
      bg="grey.700"
      px={4}
      pt={2}
      pb={3}
      boxShadow="xl"
      top="0"
      position="fixed"
      width="100vw"
    >
      <Link href="/">
        <Heading
          size="lg"
          color="torch.100"
          fontFamily="UnifrakturMaguntia"
          fontWeight="400"
          textShadow="2px 3px #000000"
          mt="1.5"
          mr="3"
        >
          Rift-top
        </Heading>
      </Link>
      <Heading
        alignSelf="end"
        fontFamily="UnifrakturMaaguntia"
        fontWeight="400"
        fontSize="22"
        color="grey.500"
      >
        {title}
      </Heading>

      <Spacer />

      <Avatar size="sm" onClick={onOpen} mt="5px">
        <AvatarBadge boxSize="1em" bg="teal.500" />
      </Avatar>
      <AccountDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};
