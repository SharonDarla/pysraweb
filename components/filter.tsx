import { ChevronUpIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon, Container, Flex, Text } from "@radix-ui/themes";
import { useRef, useState } from "react";
import RadioButton from "./radio-buton";

type FilterProps = {
  title: string;
  options: string[];
};

export default function Filter({ title, options }: FilterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerOpen, setContainerOpen] = useState(false);

  const handleToggle = () => {
    if (!containerRef.current) return;
    setContainerOpen(!containerOpen);
    const el = containerRef.current;
    el.style.display = el.style.display === "none" ? "block" : "none";
  };
  return (
    <Flex direction={"column"} gap={"4"}>
      <Flex onClick={handleToggle} justify={"between"} align={"center"}>
        <Text weight={"medium"}>{title}</Text>
        {containerOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </Flex>
      <Container ref={containerRef}>
        {options.map((option) => (
          <RadioButton key={option} label={option} name={option} />
        ))}
      </Container>
    </Flex>
  );
}
