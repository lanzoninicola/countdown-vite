import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import GroupTitle from "./components/editor/layout/group-title/group-title";
import PropertyGroupWrapper from "./components/editor/layout/property-group-wrapper/property-group-wrapper";
import CountdownTitle from "./components/editor/properties/countdown-name/countdown-title";
import TargetDate from "./components/editor/properties/target-date/target-date";
import Time from "./components/editor/properties/time/time";
import Timezone from "./components/editor/properties/timezone/timezone";
import FakeWrapper from "./FakeWrapper";
import GoogleFontPicker from "./components/editor/properties/font-picker/font-picker";

function App() {
  return (
    <FakeWrapper>
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
          <GroupTitle>Text</GroupTitle>
          <CountdownTitle />
          <GoogleFontPicker />
        </PropertyGroupWrapper>
      </Flex>
    </FakeWrapper>
  );
}

export default App;
