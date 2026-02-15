"use client";
import { SearchQueryProvider } from "@/context/search_query";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import DynamicFavicon from "./dynamic-favicon";
import { useEffect } from "react";

export default function Wrapper({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const queryClient = new QueryClient();

  useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k" ) {
      e.preventDefault();

      const input = document.getElementById(
        "global-search-input"
      ) as HTMLInputElement | null;
      if (input) {
        input.focus();
        input.select();
      }
    }
  };
  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("keydown", handleKey);
  };
}, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute={"class"}>
        <DynamicFavicon />
        <SearchQueryProvider>
          <Theme accentColor="indigo">{children}</Theme>
        </SearchQueryProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
