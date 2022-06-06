import "../../../../style/global.css";

import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

import useElementPosition from "../../../../hooks/useElementPosition";
import { GOOGLE_FONTS_LIST } from "../../../../services/typography/constants";
import { Typography } from "../../../../services/typography/types";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import FontSelectorDialog from "../../../shared/font-selector-dialog/font-selector-dialog";

export default function GoogleFontPicker() {
  const [fontSelected, setFontSelected] = useState<Typography>(
    GOOGLE_FONTS_LIST[0]
  );
  const [showDialog, setShowDialog] = useState(false);
  let ref = useRef(null);
  let { left, top } = useElementPosition(ref);

  return (
    <PropertyWrapper>
      <Label>Font</Label>
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
          onFontSelected={setFontSelected}
          callerPosition={{ left: left, top }}
          onCloseDialog={() => setShowDialog(!showDialog)}
        />
      )}
    </PropertyWrapper>
  );
}
