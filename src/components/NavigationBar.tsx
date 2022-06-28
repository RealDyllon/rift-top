import {
  Avatar, AvatarBadge, Flex, Spacer, Text,
} from '@chakra-ui/react';

const NavigationBar = () => (
  <Flex alignItems="center" bg="primary.500" p={2} boxShadow="lg">
    <Text>PageTitle</Text>
    <Spacer />
    <Avatar size="sm">
      <AvatarBadge boxSize="1em" bg="teal.500" />
    </Avatar>
  </Flex>
);

export default NavigationBar;
