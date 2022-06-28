import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { trpc } from '../utils/trpc';
import NavigationBar from '../components/NavigationBar';
import Page from '../components/Page';

const Home: NextPage = () => {
  const roomsQuery = trpc.useQuery(['rooms.getRooms', { username: 'waldo' }]);

  if (!roomsQuery.data) {
    return <div>Loading...</div>;
  }
  return (
    <Page>
      <Head>
        <title>Rift-top</title>
        <meta name="description" content="rift-top - rooms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar title="Rift-top" />

      {roomsQuery.data?.rooms?.map((room) => (
        <Box key={room.id} m={4} p={4} bg="#2f3136" borderRadius="lg" boxShadow="sm">
          {room.name}
        </Box>
      ))}
    </Page>
  );
};

export default Home;
