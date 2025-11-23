import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link } from "@radix-ui/themes";

export default function Navabr() {
  return (
    <Flex justify="between" align="center" p="3">
      <Link>Docs</Link>
      <Button>
        <GitHubLogoIcon /> Star on GitHub
      </Button>
    </Flex>
  );
}
