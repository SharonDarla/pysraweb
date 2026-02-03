import SearchBar from "@/components/search-bar";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Box, Callout, Code, Flex, Link, Text } from "@radix-ui/themes";

export default function MCP() {
  return (
    <>
      <SearchBar />
      <Flex
        gap="4"
        py={"4"}
        ml={{ initial: "1rem", md: "13rem" }}
        mr={{ initial: "1rem", md: "16rem" }}
        direction={"column"}
      >
        <Text size="8" weight="bold" mb="3">
          MCP Server
        </Text>

        <Text size="3">
          We offer a remote{" "}
          <Link
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Model Context Protocol (MCP)
          </Link>{" "}
          server that enables LLM chat clients to use pysraweb&apos;s features.
          This provides easy and intuitive access to exploring datasets from GEO
          and SRA.
        </Text>

        <Callout.Root>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            Connect your LLM client using this URL:{" "}
            <Code variant="soft" size="3">
              https://pysraweb.saketlab.org/api/mcp
            </Code>
          </Callout.Text>
        </Callout.Root>

        <Text size="6" weight="medium">
          Setup Guide for Claude Desktop
        </Text>

        <Flex direction="column" gap="4">
          <Text size="3">
            1. Download and install the{" "}
            <Link
              href="https://claude.com/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Desktop app
            </Link>
          </Text>

          <Text size="3">
            2. Open the Claude Desktop configuration file by going to{" "}
            <Text weight="medium">Settings → Developer → Edit Config</Text>
          </Text>

          <Text size="3">
            3. Add the following configuration to the <Code>mcpServers</Code>{" "}
            section:
          </Text>

          <Box>
            <Code
              variant="soft"
              size="2"
              style={{
                display: "block",
                whiteSpace: "pre",
                padding: "1rem",
                borderRadius: "8px",
                overflowX: "auto",
              }}
            >
              {`"mcpServers": {
  "pysraweb": {
    "command": "npx",
    "args": ["-y", "mcp-remote", "https://pysraweb.saketlab.org/api/mcp"]
  }
}`}
            </Code>
          </Box>

          <Text size="3">4. Restart Claude Desktop to apply the changes</Text>

          <Text>
            Once configured, you&apos;ll be able to search and explore GEO and
            SRA datasets directly from Claude Desktop conversations.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
