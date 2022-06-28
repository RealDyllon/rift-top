import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {

  const hello = trpc.useQuery(['hello', { text: 'client' }]);

  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
      <div>
        <p>{hello.data?.greeting}</p>
      </div>
  );
}

export default Home
