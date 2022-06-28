import {
  Avatar, AvatarBadge, Flex, Heading, Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { AccountDrawer } from './AccountDrawer';

interface NavigationBarProps {
  title: string
}

export const NavigationBar = ({ title } : NavigationBarProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Flex
      alignItems="center"
      bg="#36393f"
      px={4}
      pt={2}
      pb={3}
      boxShadow="xl"
      top="0"
      position="fixed"
      width="100vw"
    >
      <Heading
        size="xl"
        color="primary.400"
        fontFamily="MedievalSharp"
      >
        {title}
      </Heading>
      <Spacer />
      <Avatar size="sm" onClick={onOpen}>
        <AvatarBadge boxSize="1em" bg="teal.500" />
      </Avatar>
      <AccountDrawer onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};
