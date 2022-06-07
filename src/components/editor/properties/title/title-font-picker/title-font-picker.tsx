import { useState } from "react";
import { GOOGLE_FONTS_LIST } from "../../../../../services/typography/constants";
import { Typography } from "../../../../../services/typography/types";
import GoogleFontPicker from "../../../../shared/google-font-picker/google-font-picker";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../../primitives/label/label";

export default function TitleFontPicker() {
  const [fontSelected, setFontSelected] = useState<Typography>(
    GOOGLE_FONTS_LIST[0]
  );

  return (
    <PropertyWrapper>
      <Label>Font</Label>
      <GoogleFontPicker
        fontSelected={fontSelected}
        onFontSelected={setFontSelected}
      />
    </PropertyWrapper>
  );
}
