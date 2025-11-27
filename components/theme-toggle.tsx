import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { SegmentedControl } from "@radix-ui/themes";

export default function ThemeToggle() {
  return (
    <SegmentedControl.Root defaultValue="light">
      <SegmentedControl.Item value="light">
        <SunIcon style={{ marginTop: "5px" }} />
      </SegmentedControl.Item>
      <SegmentedControl.Item style={{ marginTop: "5px" }} value="dark">
        <MoonIcon />
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}
