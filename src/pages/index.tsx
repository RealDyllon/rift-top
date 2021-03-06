import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['rooms.getRooms', { username: 'waldo' }]);

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {hello.data?.rooms?.map((room) => (
            <div key={room.id}>
              {room.name}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
