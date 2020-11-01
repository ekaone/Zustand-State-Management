import Head from "next/head";
import { Flex, Text, Stack, Box } from "@chakra-ui/core";
import create from "zustand";
// components
import Layout from "../components/layout";
import CardCounter from "../components/card-counter";
import { useStore } from "./store";

export default function Home() {
  const inc1 = useStore(state => state.inc.inc1);
  const count1 = useStore(state => state.count1);

  const inc2 = useStore(state => state.inc.inc2);
  const count2 = useStore(state => state.count2);

  return (
    <>
      <Head>
        <title>Zustand</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Stack isInline>
          <CardCounter value={count1} addInc={inc1} />
          <CardCounter value={count2} addInc={inc2} />
        </Stack>
      </Layout>
    </>
  );
}
