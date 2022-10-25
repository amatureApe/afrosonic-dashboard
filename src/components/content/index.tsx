import { VStack, HStack } from '@chakra-ui/react'
import { Sidebar } from 'src/components/sidebar/index'

export const Content = () => {
  return (
    <HStack width="full" flex={1} overflow="hidden">
      <Sidebar />
      <VStack px={12} pt={12} width="full" height="full" spacing={6} overflow="hidden">
        <HStack width="full" alignItems="flex-start" overflow="hidden" flex={1}>

        </HStack>
      </VStack>
    </HStack>
  )
}