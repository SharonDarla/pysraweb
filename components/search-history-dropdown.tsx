"use client";
import { CountdownTimerIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { useRef } from "react";

interface SearchHistoryDropdownProps {
  isVisible: boolean;
  filteredHistory: string[];
  onHistoryClick: (item: string) => void;
  onRemoveItem: (item: string, e: React.MouseEvent) => void;
  position?: "relative" | "absolute";
}

export default function SearchHistoryDropdown({
  isVisible,
  filteredHistory,
  onHistoryClick,
  onRemoveItem,
  position = "relative",
}: SearchHistoryDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (!isVisible || filteredHistory.length === 0) return null;

  if (position === "relative") {
    return (
      <Flex style={{ width: "100%" }} mt={"1"}>
        <Card
          ref={dropdownRef}
          style={{ width: "100%" }}
          onMouseDown={(e) => {
            // Prevent blur when clicking inside dropdown
            e.preventDefault();
          }}
        >
          <Flex direction={"column"} gap={"2"}>
            {filteredHistory.map((item) => (
              <div key={item}>
                <Flex
                  align={"center"}
                  justify={"between"}
                  style={{ cursor: "pointer" }}
                  onClick={() => onHistoryClick(item)}
                >
                  <Flex align={"center"} gap={"2"}>
                    <CountdownTimerIcon color="gray" />
                    <Text color="gray">{item}</Text>
                  </Flex>
                  <Button
                    variant="ghost"
                    onClick={(e) => onRemoveItem(item, e)}
                  >
                    <Cross1Icon color="gray" />
                  </Button>
                </Flex>
              </div>
            ))}
          </Flex>
        </Card>
      </Flex>
    );
  } else {
    return (
      <Box
        style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        <Card
          ref={dropdownRef}
          style={{ width: "100%" }}
          onMouseDown={(e) => {
            // Prevent blur when clicking inside dropdown
            e.preventDefault();
          }}
        >
          <Flex direction={"column"} gap={"2"}>
            {filteredHistory.map((item) => (
              <div key={item}>
                <Flex
                  align={"center"}
                  justify={"between"}
                  style={{ cursor: "pointer" }}
                  onClick={() => onHistoryClick(item)}
                >
                  <Flex align={"center"} gap={"2"}>
                    <CountdownTimerIcon color="gray" />
                    <Text color="gray">{item}</Text>
                  </Flex>
                  <Button
                    variant="ghost"
                    onClick={(e) => onRemoveItem(item, e)}
                  >
                    <Cross1Icon color="gray" />
                  </Button>
                </Flex>
              </div>
            ))}
          </Flex>
        </Card>
      </Box>
    );
  }
}
