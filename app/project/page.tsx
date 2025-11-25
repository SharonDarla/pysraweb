"use client";
import SearchBar from "@/components/search-bar";
import {
  CaretSortIcon,
  DownloadIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  Badge,
  Button,
  Flex,
  IconButton,
  Separator,
  Table,
  Text,
} from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ProjectPage() {
  const searchParams = useSearchParams();
  const [srp, setSrp] = useState(searchParams.get("srp"));
  return (
    <>
      <SearchBar searchQuery={""} />
      <Flex
        style={{ marginLeft: "8.2rem", width: "81%" }}
        p="3"
        direction={"column"}
        gap={"2"}
      >
        <Flex justify={"between"} style={{ width: "100%" }} align={"center"}>
          <Text size={"8"} weight={"bold"}>
            Severe acute respiratory syndrome coronavirus 2
          </Text>
          <Flex gap={"2"}>
            <IconButton variant="outline">
              <MixerHorizontalIcon />
            </IconButton>
            <IconButton variant="outline">
              <CaretSortIcon />
            </IconButton>
            <Button>
              <DownloadIcon /> Download
            </Button>
          </Flex>
        </Flex>
        <Flex align={"center"} gap={"2"}>
          <Badge size={"3"} style={{ alignSelf: "flex-start" }}>
            {srp}
          </Badge>
          <Separator orientation={"vertical"} />
          <Text>Published on 20th October, 2020</Text>
        </Flex>
      </Flex>

      {/* The metadata table */}
      <Table.Root style={{ marginLeft: "8.2rem", width: "80%" }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>
              Experiment Accession
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              Organism Taxonomy ID
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Organism Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Library Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Library Strategy</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Library Source</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
            <Table.Cell>danilo@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
            <Table.Cell>zahra@example.com</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
            <Table.Cell>jasper@example.com</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
}
