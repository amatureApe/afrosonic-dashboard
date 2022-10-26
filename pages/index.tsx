import { VStack } from '@chakra-ui/react'
import { Content } from '../src/components/content'
import { Player } from 'components/player'

const IndexPage = () => (
  <VStack height="100vh" bg="black" width="full" overflow="hidden" spacing={0}>
    <Content />
    <Player />
  </VStack>
)

export default IndexPage
