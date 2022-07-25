import React from 'react';
import { Flex } from '@chakra-ui/react';

interface PageProps {
    children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => (
  <Flex flexDirection="column" pt={16}>
    {children}
  </Flex>
);

export default Page;
