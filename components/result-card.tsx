import { Badge, Card, Flex, Separator, Text } from "@radix-ui/themes";

type ResultCardProps = {
  experimentTitle: string;
};

export default function ResultCard({ experimentTitle }: ResultCardProps) {
  return (
    <Card variant="surface" style={{ width: "85%" }}>
      <Flex direction={"column"} gap={"2"}>
        <Flex justify={"between"} align={"center"}>
          <Text
            size={"5"}
            weight={"medium"}
            style={{ cursor: "pointer", width: "100%" }}
          >
            {experimentTitle}
          </Text>
          <Badge size={"2"}>SRP449767</Badge>
        </Flex>
        <Flex gap={"2"} align={"center"}>
          <Badge color="gray">20th October, 2020</Badge>
          <Separator orientation={"vertical"} />
          <Text>10 Experiments</Text>
          <Separator orientation={"vertical"} />
          <Text>100 Total runs</Text>
        </Flex>
      </Flex>
    </Card>
  );
}
