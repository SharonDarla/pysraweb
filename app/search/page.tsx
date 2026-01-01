"use client";
import GitHubButton from "@/components/github-button";
import ResultCard from "@/components/result-card";
import ThemeToggle from "@/components/theme-toggle";
import { SERVER_URL } from "@/utils/constants";
import { SearchResults } from "@/utils/types";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Skeleton, Text, TextField } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const getSearchResults = async (
  query: string | null
): Promise<SearchResults | null> => {
  if (!query) return null;

  const res = await fetch(
    `${SERVER_URL}/search?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error("Network Error");
  }
  return res.json();
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: ({ queryKey }) => getSearchResults(queryKey[1] as string | null),
    enabled: !!query,
  });

  const [searchQuery, setSearchQuery] = useState(query);

  return (
    <>
      {/* Navbar and search */}
      <Flex
        justify={{ initial: "center", sm: "between" }}
        align="center"
        p={{ initial: "0", sm: "3" }}
        pb={"3"}
        gap={"4"}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "transparent",
        }}
      >
        <Flex
          gap={{ initial: "2", sm: "4" }}
          align={"center"}
          flexGrow={"1"}
          direction={{ initial: "column", md: "row" }}
        >
          <Link href={"/"} style={{ width: "6.2rem" }}>
            <Image
              src="/pysradb_v3.png"
              alt="pysradb logo"
              width={116}
              height={50}
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "transparent",
              }}
              unoptimized
            />
          </Link>
          <Box width={{ initial: "85%", md: "70%" }}>
            <form>
              <TextField.Root
                size={"3"}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={query ?? ""}
              >
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </form>
          </Box>
        </Flex>
        <Flex
          gap={"3"}
          align={"center"}
          display={{ initial: "none", md: "flex" }}
        >
          <ThemeToggle />
          <GitHubButton />
        </Flex>
      </Flex>

      {/* Search results and filters */}
      <Flex
        gap="4"
        direction="column"
        pt={"3"}
        ml={{ md: "8rem" }}
        mr={{ md: "16rem" }}
      >
        {!query ? (
          <Flex align="center" justify="center">
            <Text>Start by typing a search query above.</Text>
          </Flex>
        ) : isLoading ? (
          <Flex
            gap="3"
            align="start"
            // style={{ width: "65%" }}
            justify="start"
            direction={"column"}
          >
            <Skeleton width={"100%"} height={"6rem"} />
            <Skeleton width={"100%"} height={"6rem"} />
            <Skeleton width={"100%"} height={"6rem"} />
            <Skeleton width={"100%"} height={"6rem"} />
            <Skeleton width={"100%"} height={"6rem"} />
          </Flex>
        ) : isError ? (
          <Flex
            gap="2"
            align="center"
            justify="center"
            height={"20rem"}
            direction={"column"}
          >
            <Image
              src="./controls.svg"
              alt="empty box"
              width={"100"}
              height={"100"}
            />
            <Text color="gray" size={"6"} weight={"bold"}>
              Failed to connect
            </Text>
            <Text color="gray" size={"2"}>
              Check your network connection
            </Text>
          </Flex>
        ) : searchResults ? (
          searchResults.map((searchResult) => (
            <ResultCard
              key={searchResult.accession}
              accesssion={searchResult.accession}
              title={searchResult.title}
              summary={searchResult.summary}
              updated_at={searchResult.updated_at}
            />
          ))
        ) : (
          <Flex
            align="center"
            justify="center"
            direction={"column"}
            height={"20rem"}
          >
            {/* Credits: https://www.svgrepo.com/svg/489659/empty-box */}
            <Image
              src="./empty-box.svg"
              alt="empty box"
              width={"100"}
              height={"100"}
            />
            <Text color="gray" size={"6"} weight={"bold"}>
              No results found
            </Text>
            <Text color="gray" size={"2"}>
              Try refining you search text
            </Text>
          </Flex>
        )}
      </Flex>
    </>
  );
}
