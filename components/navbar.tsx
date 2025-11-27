"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link } from "@radix-ui/themes";
import ThemeToggle from "./theme-toggle";

export default function Navabar() {
  return (
    <Flex style={{ zIndex: 10 }} justify="between" align="center" p="3">
      <Flex gap={"4"} align={"center"}>
        <Link href="https://saket-choudhary.me/pysradb/index.html">Docs</Link>
        <Link href="#">Paper</Link>
      </Flex>
      <Flex gap={"4"} align={"center"}>
        <ThemeToggle />
        <Link href="https://saketlab.in/">Saket Lab</Link>
        <Button variant="outline" asChild>
          <a href="https://github.com/saketc/pysradb">
            <GitHubLogoIcon /> Star on GitHub
          </a>
        </Button>
      </Flex>
    </Flex>
  );
}
