import {
  CaretSortIcon,
  GitHubLogoIcon,
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  IconButton,
  Link as RadixLink,
  TextField,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SearchBar({
  searchQuery,
}: {
  searchQuery: string | null;
}) {
  const [query, setQuery] = useState(searchQuery);
  return (
    <Flex
      justify="between"
      align="center"
      p="3"
      gap={"4"}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "white",
        boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
      }}
    >
      <Flex gap={"4"} align={"center"} flexGrow={"1"}>
        <Link href={"/"}>
          <Image
            src="/pysradb_v3.png"
            alt="pysradb logo"
            width={116}
            height={50}
          />
        </Link>
        <form style={{ width: "70%" }}>
          <TextField.Root
            placeholder="all scRNA-seq datasets from 2024 to 2023 which use 10x technology"
            size="3"
            onChange={(e) => setQuery(e.target.value)}
            value={query ?? ""}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </form>
        <IconButton variant="outline">
          <MixerHorizontalIcon />
        </IconButton>
        <IconButton variant="outline">
          <CaretSortIcon />
        </IconButton>
      </Flex>
      <RadixLink href="https://saketlab.in/">Saket Lab</RadixLink>
      <RadixLink href="https://saket-choudhary.me/pysradb/index.html">
        Docs
      </RadixLink>
      <Button>
        <GitHubLogoIcon /> Star on GitHub
      </Button>
    </Flex>
  );
}
