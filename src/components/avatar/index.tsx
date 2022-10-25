import { HStack, Text, Avatar as ChakraAvatar } from '@chakra-ui/react'

export const Avatar = () => {
  return (
    <HStack flexShrink={0}>
      <Text mr={3} color="whiteAlpha.900">John Doe</Text>
      <ChakraAvatar name="John Doe" src="/images/dog-2.jpg" />
    </HStack>
  )
}