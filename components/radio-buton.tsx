import { Flex, Radio, Text } from "@radix-ui/themes";
import type { ReactNode } from "react";

type RadioButtonProps = {
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  label?: ReactNode;
};

export default function RadioButton({
  name,
  value,
  defaultChecked,
  label,
}: RadioButtonProps) {
  return (
    <Flex asChild gap="2">
      <Text as="label" size="2">
        <Radio
          name={name}
          value={value ?? "0"}
          defaultChecked={defaultChecked}
        />
        {label}
      </Text>
    </Flex>
  );
}
