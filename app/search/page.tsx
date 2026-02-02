import SearchPageBody from "@/components/search-page-body";
import SearchPageSkeleton from "@/components/search-page-skeleton";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Results",
  description:
    "Search results for GEO and SRA sequencing datasets. Filter by organism, library strategy, and more.",
  alternates: {
    canonical: "https://pysraweb.saketlab.org/search",
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchPageBody />
    </Suspense>
  );
}
