import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../hooks/SideBarDrawer";

import { Logo } from "./Logo";
import { NotificatinsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header() {

  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1420}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >

      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          variant="unstyled"
          onClick={onOpen}
          mr={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex
        align="center"
        ml="auto"
      >
        <NotificatinsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex >
  )
}