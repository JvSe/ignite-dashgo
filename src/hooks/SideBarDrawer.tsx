import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProps {
  children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SidebarDraweContext = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({ children }: SidebarDrawerProps) {
  const router = useRouter();
  const disclousure = useDisclosure();
  const { onClose } = disclousure;

  useEffect(() => {
    onClose();
  }, [onClose, router.asPath]);

  return (
    <SidebarDraweContext.Provider value={disclousure}>
      {children}
    </SidebarDraweContext.Provider>
  )
};

export const useSidebarDrawer = () => useContext(SidebarDraweContext)