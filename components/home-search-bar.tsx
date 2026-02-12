import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import HeroSearchBar from "./hero-search-bar";

export default function HomeSearchBar() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap="4"
      mt={{ initial: "4rem" }}
    >
      <Box pb={"3"}>
        <Image
          src="/pysraweb_logo.png"
          alt="pysraweb"
          width={1293}
          height={235}
          style={{ width: "min(22rem, 80vw)", height: "auto" }}
          priority
        />
      </Box>
      <Text
        weight={"medium"}
        color="gray"
        size={{ initial: "1", md: "3" }}
        style={{ userSelect: "none" }}
      >
        Discover GEO & SRA datasets
      </Text>
      <HeroSearchBar />
    </Flex>
  );
}
