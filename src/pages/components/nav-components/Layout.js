import { Box } from "./Box.js";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100vw"
    }}
  >
    {children}
    <Content />
  </Box>
);
