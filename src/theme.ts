import { ChakraTheme, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const defaultTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
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
    torch: {
      100: '#d3864f',
      200: '#ad6f42',
      300: '#885836',
      400: '#65422a',
      500: '#442e1e',
      600: '#530000',
      700: '#000000',
    },
    grey: {
      100: '#cccacd',
      200: '#9f97a0',
      300: '#837a84',
      400: '#6a636b',
      500: '#4b474e',
      600: '#3c383e',
      700: '#2e2b30',
      800: '#1c1b1f',
    },
  },

  components: {
    Modal: {
      baseStyle: () => ({
        dialog: {
          bg: '#1c1b1f'
        }
      })
    }
  },

  styles: {
    global: (props) => ({
      body: {
        bg: mode('#2e2b30', '#36393f')(props),
      },
    }),
  },
};

export const theme = extendTheme(defaultTheme);
