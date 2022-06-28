import {
  Avatar, AvatarBadge, Flex, Heading, Spacer,
} from '@chakra-ui/react';

interface NavigationBarProps {
  title: string
}

const NavigationBar = ({ title } : NavigationBarProps) => (
  <Flex
    alignItems="center"
    bg="#36393f"
    px={4}
    pt={2}
    pb={3}
    boxShadow="xl"
    top="0"
    position="sticky"
  >
    <Heading
      size="xl"
      color="primary.400"
      fontFamily="MedievalSharp"
    >
      {title}
    </Heading>
    <Spacer />
    <Avatar size="sm">
      <AvatarBadge boxSize="1em" bg="teal.500" />
    </Avatar>
  </Flex>
);

export default NavigationBar;
