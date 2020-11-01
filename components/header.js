import React from "react";
import { Box, Button } from "@chakra-ui/core";

export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt="10px"
      pb="30px"
    >
      <Button
        as="a"
        target="_blank"
        href="https://github.com/pmndrs/zustand"
        variantColor="red"
        size="sm"
        leftIcon="info"
      >
        Github
      </Button>
    </Box>
  );
}
