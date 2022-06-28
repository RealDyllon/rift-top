import {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta name="theme-color" content="#36393f" media="(prefers-color-scheme: dark)" /> */}
      </Head>
      <body>
        <ColorModeScript initialColorMode="dark" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
