import React from 'react';
import { Box } from '@chakra-ui/react';

interface PageProps {
    children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => (
  <Box>
    {children}
  </Box>
);

export default Page;
