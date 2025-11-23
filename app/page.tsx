import Footer from "@/components/footer";
import HomeSearchBar from "@/components/home-search-bar";
import Navabr from "@/components/navbar";
import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex style={{ height: "100svh" }} direction="column">
      <Navabr />
      <HomeSearchBar />
      <Footer />
    </Flex>
  );
}
