import { Box, Container, HStack } from '@chakra-ui/react'

import { Disc } from './disc'

export const Player = () => {
  return (
    <Box
      width="full"
      bg="gray.dark"
      height={{ base: 24, '2xl': 32 }}
      flexShrink={0}
    >
      <Container centerContent height="full" maxW="7x1">
        <HStack width="full" height="full" justifyContent="flex-start" spacing={12}>
          <Disc />
        </HStack>
      </Container>
    </Box>
  )
}