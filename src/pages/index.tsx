import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Spinner, Center } from '@chakra-ui/react';
import { trpc } from '../utils/trpc';
import NavigationBar from '../components/navigationBar';
import Page from '../components/Page';
import { BottomTabs } from '../components/bottomTabs/BottomTabs';

const Home: NextPage = () => {
  const roomsQuery = trpc.useQuery(['rooms.getRooms', { username: 'waldo' }]);

  if (!roomsQuery.isLoading) {
    return (
      <Page>
        <NavigationBar />
        <Center>
          <Spinner mt="150" size="xl" thickness="6px" color="torch.100" />
        </Center>
        <BottomTabs />
      </Page>
    );
  }
  return (
    <Page>
      <Head>
        <title>Rift-top</title>
        <meta name="description" content="rift-top - rooms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar title="Home" />

      {roomsQuery.data?.rooms?.map((room) => (
        <Box key={room.id} m={4} p={4} bg="#2f3136" borderRadius="lg" boxShadow="sm" fontFamily="Caudex" textColor="grey.100">
          {room.name}
        </Box>
      ))}

      <BottomTabs />
    </Page>
  );
};

export default Home;
