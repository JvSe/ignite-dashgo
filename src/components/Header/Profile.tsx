import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text> João Vitor </Text>
          <Text color="gray.300" fontSize="small">
            joaovitorsoares12@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="João Vitor" src="https://github.com/jvse.png" />
    </Flex>
  )
}