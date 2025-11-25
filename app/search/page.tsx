"use client";
import ResultCard from "@/components/result-card";
import SearchBar from "@/components/search-bar";
import { SearchResults } from "@/utils/types";
import { Flex, Spinner, Text } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));
  const [searchResults, setSearchResults] = useState<SearchResults>();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearchMade, setIsSearchMade] = useState(false);

  useEffect(() => {
    const fetchResults = () => {
      // TODO: Use tanstack query
      if (query && !isSearchMade) {
        // fetch(`http://10.195.102.16:8000/search?q=${encodeURIComponent(query)}`)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);

        //     if (data.error) {
        //       setIsError(true);
        //       setErrorMessage(data.error);
        //     } else {
        //       setSearchResults(data);
        //     }
        //   });

        console.log(query);
        setIsSearchMade(true);
      }
    };

    fetchResults();
  }, []);

  return (
    <>
      {/* Navbar and search */}
      <SearchBar searchQuery={query} />
      {/* Search results and filters */}
      <Flex
        gap={"4"}
        p="3"
        style={{ marginLeft: "8.2rem", width: "65%" }}
        direction={"column"}
      >
        {/* <ResultCard experimentTitle="Ampliseq of SARS-CoV-2" />
        <ResultCard experimentTitle="Severe acute respiratory syndrome coronavirus 2" /> */}
        {searchResults ? (
          Object.entries(searchResults).flatMap(([studyAcc, results]) => (
            <ResultCard
              key={studyAcc}
              studyAcc={studyAcc}
              numExperiments={results.length}
              experimentTitle={results[0].experiment_title}
            />
          ))
        ) : isError ? (
          <Flex gap={"2"} align={"center"} justify={"center"}>
            <Text color="red">
              {errorMessage || "An error occurred while searching"}
            </Text>
          </Flex>
        ) : (
          <Flex
            gap={"2"}
            align={"center"}
            style={{ width: "65%" }}
            justify={"center"}
          >
            <Spinner size={"3"} />
            <Text>Search in progress</Text>
          </Flex>
        )}
      </Flex>
    </>
  );
}
