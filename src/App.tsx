import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import GroupTitle from "./components/editor/layout/group-title/group-title";
import PropertyGroupWrapper from "./components/editor/layout/property-group-wrapper/property-group-wrapper";
import CountdownTitle from "./components/editor/properties/title/countdown-title/countdown-title";
import TargetDate from "./components/editor/properties/target-date/target-date";
import Time from "./components/editor/properties/time/time";
import Timezone from "./components/editor/properties/timezone/timezone";
import FakeWrapper from "./FakeWrapper";
import GoogleFontPicker from "./components/editor/properties/title/title-font-picker/title-font-picker";
import MainContent from "./components/editor/layout/main-content/main-content";
import TitleFontSizePicker from "./components/editor/properties/title/title-font-size-picker/title-font-size-picker";
import TitleFontPicker from "./components/editor/properties/title/title-font-picker/title-font-picker";
import TitleColorPicker from "./components/editor/properties/title/title-color-picker/title-color-picker";

function App() {
  return (
    <FakeWrapper>
      <MainContent>
        <Box>
          <Text>This is the Header</Text>
        </Box>
        <Flex flexDirection={"column"}>
          <PropertyGroupWrapper>
            <GroupTitle>Target Date</GroupTitle>
            <TargetDate />
            <Time />
            <Timezone />
          </PropertyGroupWrapper>
          <Divider marginBlock={".5rem"} />
          <PropertyGroupWrapper>
            <GroupTitle>Title Style</GroupTitle>
            <CountdownTitle />
            <TitleFontPicker />
            <TitleFontSizePicker />
            <TitleColorPicker />
          </PropertyGroupWrapper>
          <Divider marginBlock={".5rem"} />
          <PropertyGroupWrapper>
            <GroupTitle>Countdown Style</GroupTitle>
          </PropertyGroupWrapper>
        </Flex>
      </MainContent>
    </FakeWrapper>
  );
}

export default App;
