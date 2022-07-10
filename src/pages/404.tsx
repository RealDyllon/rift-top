import {
 Center, Heading, Stack,
} from '@chakra-ui/react';
import { BottomTabs } from '../components/bottomTabs/BottomTabs';
import NavigationBar from '../components/navigationBar';
import Page from '../components/Page';

export default function Custom404() {
  return (
    <Page>
      <NavigationBar title=" " />
      <Stack>
        <Center>
          <Heading fontFamily="Imperial Script">
            Why are you here?
          </Heading>
        </Center>
        <Center>

          <iframe
            width="370"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="Error404"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        </Center>
      </Stack>
      <BottomTabs />
    </Page>
  );
}
