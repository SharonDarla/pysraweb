import { Badge, Card, Flex, Text } from "@radix-ui/themes";

type ResultCardProps = {
  experimentTitle: string;
};

export default function ResultCard({ experimentTitle }: ResultCardProps) {
  return (
    <Card variant="surface" style={{ width: "85%" }}>
      <Flex direction={"column"} gap={"2"}>
        <Text size={"4"} weight={"medium"}>
          {experimentTitle}
        </Text>
        <Flex gap={"2"}>
          <Badge>SRP449767</Badge>
          <Badge>SRX21042145</Badge>
          <Badge>SRX21042145</Badge>
          <Badge>Drosophila ananassae</Badge>
          <Badge>RNA-Seq</Badge>
        </Flex>
      </Flex>
    </Card>
  );
}
