import type { NextPage } from 'next';
import Head from 'next/head';
import { Center, Spinner } from '@chakra-ui/react';
import NavigationBar from '../components/navigationBar';
import Page from '../components/Page';
import { trpc } from '../utils/trpc';
import { MapGrid } from '../components/MapGrid/MapGrid';

const gameMap: NextPage = () => {
  const gameMapQuery = trpc.useQuery(['gameMap.getGameMap', { username: 'waldo' }]);
  if (!gameMapQuery.data) {
    return (
      <Page>
        <NavigationBar />
        <Center>
          <Spinner mt="150" size="xl" thickness="6px" color="torch.100" />
        </Center>
      </Page>
    );
  }

 type chunk = {
  color: string;
}
 const arr: chunk[] = [];

 for (let i = 1; i < 50; i++) {
   const temp: chunk = gameMapQuery.data.biomes[Math.floor(Math.random() * gameMapQuery.data.biomes.length)];
   arr.push(temp);
 }

 return (
   <Page>
     <Head>
       <title>Map testing</title>
       <meta name="description" content="Map demo" />
       <link rel="icon" href="/favicon.ico" />
     </Head>

     <NavigationBar title="Map" />
     <MapGrid grid={arr} />

   </Page>
 );
};

export default gameMap;
