import { Flex, HStack, Button } from "@chakra-ui/react";
import { Typography } from "../../../services/typography/types";
import FontList from "./font-list/font-list";
import TextPreview from "./text-preview/text-preview";

interface CallerPosition {
  top: number;
  left?: number;
}

interface FontSelectorDialogProps {
  fontSelected: Typography;
  onFontSelected: (font: Typography) => void;
  callerPosition: CallerPosition;
  onCloseDialog: () => void;
}

export default function FontSelectorDialog({
  fontSelected,
  onFontSelected,
  callerPosition,
  onCloseDialog,
}: FontSelectorDialogProps) {
  return (
    <Flex
      className="font-selector-dialog"
      role="dialog"
      flexDirection={"column"}
      borderRadius={"lg"}
      boxShadow={"lg"}
      paddingBlock="3"
      pr={3}
      position={"absolute"}
      top={callerPosition.top}
      left={callerPosition.left}
      maxH="350px"
      bg="white"
      zIndex={99}
    >
      <HStack gap={1}>
        <FontList onFontSelected={onFontSelected} />
        <TextPreview fontSelected={fontSelected} />
      </HStack>
      <Button
        // w="100%"
        size="xs"
        className="theme-font"
        onClick={onCloseDialog}
        ml={3}
      >
        Save
      </Button>
    </Flex>
  );
}
