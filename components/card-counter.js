import React from "react";
import { Box, Text } from "@chakra-ui/core";

export default function CardCounter(props) {
  const { value } = props;

  return (
    <Box
      borderWidth="1"
      boxShadow="lg"
      textAlign="center"
      bg="gray.200"
      borderRadius="5px"
      minWidth="150px"
      mb="20px"
    >
      <Text fontSize="50px" fontWeight="600" color="red.600">
        {value}
      </Text>
    </Box>
  );
}
