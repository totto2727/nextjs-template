import { Box, Button, useColorMode } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Index: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Box>Hello, world!</Box>
      <Button onClick={toggleColorMode}>{colorMode}</Button>
    </Box>
  )
}
export default Index
