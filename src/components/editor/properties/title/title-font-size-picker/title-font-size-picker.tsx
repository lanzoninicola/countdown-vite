import { Box } from "@chakra-ui/react";
import { useState } from "react";
import SliderMarkTemplate from "../../../../shared/slider-mark-template/slider-mark-template";
import PropertyWrapper from "../../../layout/property-wrapper/property-wrapper";
import Label from "../../../primitives/label/label";

export default function TitleFontSizePicker() {
  const initialSize = 16;
  const [fontSize, setFontSize] = useState(initialSize);

  function onFontSizeChange(value: number) {
    setFontSize(value);
  }

  return (
    <PropertyWrapper>
      <Label>Font size (px)</Label>
      <Box gridColumn={"2 / -1"}>
        <SliderMarkTemplate
          min={4}
          max={150}
          sliderValue={fontSize}
          onSliderChange={onFontSizeChange}
        />
      </Box>
    </PropertyWrapper>
  );
}
