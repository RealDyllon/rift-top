import { ChakraTheme, extendTheme } from '@chakra-ui/react';

const defaultTheme: Partial<ChakraTheme> = {
  // todo
  colors: {
    primary: {
      100: '#fdebeb',
      200: '#f8c8ca',
      300: '#f39fa3',
      400: '#ea757b',
      500: '#e64c58',
      600: '#c03742',
      700: '#982831',
      800: '#75131d',
      900: '#51040d',
    },
  },
};

export const theme = extendTheme(defaultTheme);