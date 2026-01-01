"use client";
import ResultCard from "@/components/result-card";
import SearchBar from "@/components/search-bar";
import { SERVER_URL } from "@/utils/constants";
import { SearchResults } from "@/utils/types";
import { CaretSortIcon, ClockIcon } from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Text,
} from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const getSearchResults = async (
  query: string | null,
  db: string | null
): Promise<SearchResults | null> => {
  if (!query) return null;

  let url = `${SERVER_URL}/search?q=${encodeURIComponent(query)}`;
  if (db === "sra" || db === "geo") {
    url += `&db=${encodeURIComponent(db)}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network Error");
  }
  return res.json();
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q");

  const db = searchParams.get("db");

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["search", query, db],
    queryFn: ({ queryKey }) =>
      getSearchResults(
        queryKey[1] as string | null,
        queryKey[2] as string | null
      ),
    enabled: !!query,
  });

  return (
    <>
      {/* Navbar and search */}
      <SearchBar initialQuery={query} />

      {/* Search results and filters */}
      <Flex
        gap={{ initial: "4", md: "8" }}
        p={"4"}
        justify={"start"}
        direction={{ initial: "column", md: "row" }}
      >
        {/* Filters for small screens */}
        <Flex
          direction={"row-reverse"}
          justify={"center"}
          gap={"2"}
          display={{ initial: "flex", md: "none" }}
        >
          <Button variant="surface" size={"1"}>
            <CaretSortIcon /> Sort by
          </Button>
          <Button variant="surface" size={"1"}>
            <ClockIcon /> Any time
          </Button>

          <Select.Root
            defaultValue={db ? db : "both"}
            onValueChange={(value) => {
              if (query) {
                let url = `/search?q=${encodeURIComponent(query)}`;
                if (value === "sra" || value === "geo") {
                  url += `&db=${encodeURIComponent(value)}`;
                }
                router.push(url);
              }
            }}
            size={"1"}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Item value="geo">From GEO</Select.Item>
                <Select.Item value="sra">From SRA</Select.Item>
                <Select.Item value="both">From GEO & SRA</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </Flex>
        {/* Filters for md+ screens*/}
        <Flex
          direction={"column"}
          gap={"4"}
          display={{ initial: "none", md: "flex" }}
          position={"sticky"}
          style={{ top: "7rem" }}
          height={"fit-content"}
        >
          <RadioGroup.Root
            defaultValue={db ? db : "both"}
            name="dataset"
            onValueChange={(value) => {
              if (query) {
                let url = `/search?q=${encodeURIComponent(query)}`;
                if (value === "sra" || value === "geo") {
                  url += `&db=${encodeURIComponent(value)}`;
                }
                router.push(url);
              }
            }}
          >
            <RadioGroup.Item value="geo">From GEO</RadioGroup.Item>
            <RadioGroup.Item value="sra">From SRA</RadioGroup.Item>
            <RadioGroup.Item value="both">From GEO & SRA</RadioGroup.Item>
          </RadioGroup.Root>

          <Separator orientation={"horizontal"} size={"4"} />

          <RadioGroup.Root defaultValue="1" name="sort">
            <RadioGroup.Item value="1">Sort by relevance</RadioGroup.Item>
            <RadioGroup.Item value="2">Sort by date</RadioGroup.Item>
          </RadioGroup.Root>

          <Separator orientation={"horizontal"} size={"4"} />

          <RadioGroup.Root defaultValue="1" name="time">
            <RadioGroup.Item value="1">Any time</RadioGroup.Item>
            <RadioGroup.Item value="2">Since last year</RadioGroup.Item>
            <RadioGroup.Item value="2">Since last 5 years</RadioGroup.Item>
            <RadioGroup.Item value="2">Since last 10 years</RadioGroup.Item>
            <RadioGroup.Item value="2">Since last 20 years</RadioGroup.Item>
          </RadioGroup.Root>
        </Flex>

        <Flex
          gap="4"
          direction="column"
          maxWidth={{ initial: "100%", md: "70%" }}
          // ml={{ md: "8rem" }}
        >
          {!query ? (
            <Flex align="center" justify="center">
              <Text>Start by typing a search query above.</Text>
            </Flex>
          ) : isLoading ? (
            <Flex
              gap="3"
              align="start"
              maxWidth={{ initial: "100%", md: "70%" }}
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
      </Flex>
    </>
  );
}
