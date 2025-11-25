import { Badge, Card, Flex, Separator, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

type ResultCardProps = {
  studyAcc: string;
  experimentTitle: string;
  numExperiments: number;
};

export default function ResultCard({
  experimentTitle,
  studyAcc,
  numExperiments,
}: ResultCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/project?srp=${"SRP449767"}`);
  };
  return (
    <Card variant="surface" style={{ width: "85%" }}>
      <Flex direction={"column"} gap={"2"}>
        <Flex justify={"between"} align={"center"}>
          <Text
            size={"5"}
            weight={"medium"}
            style={{ cursor: "pointer", width: "100%" }}
            onClick={handleClick}
          >
            {experimentTitle}
          </Text>
          <Badge size={"2"}>{studyAcc}</Badge>
        </Flex>
        <Flex gap={"2"} align={"center"}>
          <Badge color="gray">20th October, 2020</Badge>
          <Separator orientation={"vertical"} />
          <Text>{numExperiments} Experiments</Text>
          {/* <Separator orientation={"vertical"} />
          <Text>100 Total runs</Text> */}
        </Flex>
      </Flex>
    </Card>
  );
}
