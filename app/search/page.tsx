"use client";
import ResultCard from "@/components/result-card";
import SearchBar from "@/components/search-bar";
import { SearchResult } from "@/utils/types";
import { Flex } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));
  const [searchResults, setSearchResults] = useState<SearchResult[]>();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //   const [numSearchResults, setNumSearchResults] = useState(0);

  // useEffect(() => {
  //   if (query) {
  //     fetch(`http://10.195.102.16:8000/?q=${encodeURIComponent(query)}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.error) {
  //           setIsError(true);
  //           setErrorMessage(data.error);
  //         } else {
  //           setSearchResults(data);
  //         }
  //       });
  //   }
  // }, [query]);

  return (
    <>
      {/* Navbar and search */}
      <SearchBar searchQuery={query} />
      {/* Search results and filters */}
      <Flex
        gap={"4"}
        p="3"
        style={{ marginLeft: "8.2rem", width: "60%" }}
        direction={"column"}
      >
        <ResultCard experimentTitle="Ampliseq of SARS-CoV-2" />
        <ResultCard experimentTitle="Severe acute respiratory syndrome coronavirus 2" />
        {/* {searchResults ? (
          searchResults.map((searchResult) => (
            <ResultCard
              key={searchResult.experiment_title}
              experimentTitle={searchResult.experiment_title}
            />
          ))
        ) : isError ? (
          <Flex gap={"2"} align={"center"} justify={"center"}>
            <Text color="red">
              {errorMessage || "An error occurred while searching"}
            </Text>
          </Flex>
        ) : (
          <Flex gap={"2"} align={"center"} justify={"center"}>
            <Spinner size={"3"} />
            <Text>Search in progress</Text>
          </Flex>
        )} */}
      </Flex>
    </>
  );
}
