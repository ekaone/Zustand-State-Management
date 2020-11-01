import React from "react";
import { Box, Text, Stack, Icon } from "@chakra-ui/core";

export default function CardCounter(props) {
  const { value, addInc } = props;

  return (
    <Box
      borderWidth="1"
      boxShadow="lg"
      bg="gray.200"
      borderRadius="5px"
      minWidth="150px"
      mb="20px"
      padding="5px"
      mr="5px"
    >
      <Stack display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="50px" fontWeight="600" color="red.600">
          {value}
        </Text>
        <Icon
          name="add"
          size="32px"
          color="teal.500"
          onClick={addInc}
          cursor="pointer"
        />
      </Stack>
    </Box>
  );
}
