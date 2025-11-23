"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link } from "@radix-ui/themes";

export default function Navabar() {
  return (
    <Flex justify="between" align="center" p="3">
      <Flex gap={"4"}>
        <Link href="https://saket-choudhary.me/pysradb/index.html">Docs</Link>
        <Link href="#">Paper</Link>
      </Flex>
      <Flex gap={"4"} align={"center"}>
        <Link href="https://saketlab.in/">Saket Lab</Link>
        <Button onClick={() => alert("sds")}>
          <GitHubLogoIcon /> Star on GitHub
        </Button>
      </Flex>
    </Flex>
  );
}
