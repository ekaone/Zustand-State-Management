import Head from "next/head";
import { Flex, Text, Button, Stack, Box } from "@chakra-ui/core";
import create from "zustand";
// components
import Layout from "../components/layout";
import CardCounter from "../components/card-counter";

const useStore = create(set => ({
  count: 1,
  inc: () => set(state => ({ count: state.count + 1 }))
}));

export default function Home() {
  const inc = useStore(state => state.inc);
  const count = useStore(state => state.count);

  return (
    <>
      <Head>
        <title>Zustand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Stack>
          <Box>
            <CardCounter value={count} />
          </Box>
          <Box alignSelf="center">
            <Button variantColor="green" onClick={inc}>
              Inc
            </Button>
          </Box>
        </Stack>
      </Layout>
    </>
  );
}
