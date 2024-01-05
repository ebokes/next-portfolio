"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./app/utils/theme";
import { useState, useEffect } from "react";
import LoadingIcon from "./app/utils/LoadingIcon";

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(delay);
  }, []);
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {" "}
        {loading ? <LoadingIcon /> : children}
      </ChakraProvider>
    </CacheProvider>
  );
}
