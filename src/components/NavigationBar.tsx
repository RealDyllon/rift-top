import {
  Avatar, AvatarBadge, Flex, Heading, Spacer,
} from '@chakra-ui/react';

const NavigationBar = () => (
  <Flex
    alignItems="center"
    bg="#36393f"
    px={4}
    pt={2}
    pb={3}
    boxShadow="3xl"
    top="0"
    position="sticky"
  >
    <Heading size="lg" color="primary.400">PageTitle</Heading>
    <Spacer />
    <Avatar size="sm">
      <AvatarBadge boxSize="1em" bg="teal.500" />
    </Avatar>
  </Flex>
);

export default NavigationBar;
