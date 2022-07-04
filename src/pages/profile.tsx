import {
  Spinner, Center, Image, Stack, Box,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import NavigationBar from '../components/navigationBar';
import Page from '../components/Page';
import { AccountPanel } from '../components/Accountpanel/AccountPanel';

const Profile: NextPage = () => {
  const profilesQuery = trpc.useQuery(['profile.getProfile', { username: 'waldo' }]);

  if (!profilesQuery.data) {
    return (
      <Center>
        <Spinner mt="150" size="xl" thickness="6px" isIndeterminate color="torch.100" />
      </Center>
    );
  }
  return (
    <Page>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar title="Profile" />

      {profilesQuery.data?.Profile.map((profile) => (
        <Box
          key={profile.id}
          border="4px"
          bg="grey.400"
          borderColor="torch.200"
          mt="1.5rem"
          ml="1rem"
          mr="1rem"
          boxShadow="dark-lg"
          rounded="lg"
        >
          <Stack direction="row" fontFamily="Caudex">
            <Image h="80px" w="50px" objectFit="fill" src={profile.dp} alt="dagoon" />
            <Stack direction="column">
              <Box mb="-2.5">
                Username:
                {' '}
                {profile.name}
              </Box>
              <Stack direction="row" fontSize={10}>
                <Box>
                  Status:
                  {' '}
                  {profile.status}
                </Box>
                <Box>
                  Last Login:
                  {' '}
                  {profile.last_login}
                </Box>
              </Stack>
              <Stack direction="row">
                <Box w="68px" fontSize={11}>
                  No. of Games Dm'ed
                </Box>
                <Box w="40px">
                  :
                  {' '}
                  {profile.dm}
                </Box>
                <Box>
                  Followers:
                  {' '}
                  {profile.followers}
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      ))}
      <AccountPanel />

    </Page>
  );
};
export default Profile;