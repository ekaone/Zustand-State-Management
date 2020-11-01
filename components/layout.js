import React from "react";
import { Box, Flex } from "@chakra-ui/core";
// components
import Header from "./header";

export default function Layout(props) {
  const { children } = props;

  return (
    <Box maxWidth="1200px" mx="auto">
      <Header />
      <Flex justifyContent="center" alignItems="center">
        {children}
      </Flex>
    </Box>
  );
}
