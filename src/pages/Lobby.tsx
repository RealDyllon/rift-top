import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Box, Spinner, Center, Grid, GridItem, Button,
} from '@chakra-ui/react';
import { trpc } from '../utils/trpc';
import NavigationBar from '../components/navigationBar';
import Page from '../components/Page';
import { BottomTabs } from '../components/bottomTabs/BottomTabs';
import { TruncateString } from '../components/TruncateString/truncateString';
import { CreateRoom } from '../components/CreateRoom/CreateRoom';

const Home: NextPage = () => {
  const LobbyQuery = trpc.useQuery(['Lobby.getLobby', { username: 'waldo' }]);

  if (LobbyQuery.isLoading) {
    return (
      <Page>
        <NavigationBar title="Lobby" />
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
        <meta name="description" content="rift-top - lobby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar title="Lobby" />
      <CreateRoom />

      {LobbyQuery.data?.Rooms?.map((room) => (
        <Grid
          key={room.id}
          templateAreas={'"name book" "description player"'}
          borderRadius="lg"
          rounded="lg"
          boxShadow="sm"
          fontFamily="Caudex"
          textColor="grey.100"
          bg="#2f3136"
          m="4"
          p="4"
        >
          <GridItem area="name" fontWeight={700}>
            <TruncateString str={room.name} num={24} />
          </GridItem>
          <GridItem area="book">
            Book:
            {' '}
            {room.book}
          </GridItem>
          <GridItem area="description" fontSize="14" mt={2}>
            <TruncateString str={room.description} num={27} />
          </GridItem>
          <GridItem area="player" mt={1}>
            Players: 4/
            {room.player}
          </GridItem>
        </Grid>
      ))}

      <BottomTabs />
    </Page>
  );
};

export default Home;
