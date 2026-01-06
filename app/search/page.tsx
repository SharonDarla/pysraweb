import SearchPageBody from "@/components/search-page-body";
import { Spinner } from "@radix-ui/themes";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <SearchPageBody />
    </Suspense>
  );
}
