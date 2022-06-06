import { Box } from "@chakra-ui/react";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box minHeight="calc(100vh - 32px)" position="relative">
      {children}
    </Box>
  );
}
