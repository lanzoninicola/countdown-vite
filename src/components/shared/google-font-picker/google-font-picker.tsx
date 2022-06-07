import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import FontSelectorDialog from "../font-selector-dialog/font-selector-dialog";
import useElementPosition from "../../../hooks/useElementPosition";
import { Typography } from "../../../services/typography/types";
import "../../../style/global.css";

interface GoogleFontPicker {
  fontSelected: Typography;
  onFontSelected: (fontSelected: Typography) => void;
}

export default function GoogleFontPicker({
  fontSelected,
  onFontSelected,
}: GoogleFontPicker) {
  const [showDialog, setShowDialog] = useState(false);
  let ref = useRef(null);
  let { left, top } = useElementPosition(ref);

  return (
    <>
      <Button
        ref={ref}
        gridColumn={"2 / -1"}
        size="xs"
        className="theme-font"
        onClick={() => setShowDialog(!showDialog)}
        lineHeight="1"
      >
        {fontSelected ? fontSelected.fontFamily : "Select font"}
      </Button>
      {showDialog && (
        <FontSelectorDialog
          fontSelected={fontSelected}
          onFontSelected={onFontSelected}
          callerPosition={{ left: left, top }}
          onCloseDialog={() => setShowDialog(!showDialog)}
        />
      )}
    </>
  );
}
