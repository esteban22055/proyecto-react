import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ItemListContainer = ({ greeting }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
      <Text fontSize="xl" textAlign="center">
        {greeting}
      </Text>
    </Box>
  );
};

export default ItemListContainer;