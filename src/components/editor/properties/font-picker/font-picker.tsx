import {
  Box,
  Button,
  HStack,
  Input,
  VStack,
  Text,
  Flex,
  Grid,
} from "@chakra-ui/react";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import "../../../../style/global.css";
import { useEffect, useState } from "react";

export default function GoogleFontPicker() {
  const [showFontSelector, setShowFontSelector] = useState(false);

  function onChangeFontFamily() {}

  return (
    <PropertyWrapper position="relative">
      <Label>Font</Label>
      <Button
        gridColumn={"2 / -1"}
        size="xs"
        className="theme-font"
        onClick={() => setShowFontSelector(!showFontSelector)}
      >
        Select Font
      </Button>
      {showFontSelector && <FontSelector />}
    </PropertyWrapper>
  );
}

function FontSelector() {
  return (
    <Flex
      id="font-selector"
      flexDirection={"column"}
      borderRadius={"md"}
      boxShadow={"md"}
      p="1rem"
      position={"absolute"}
      inset={"0"}
      minH="300px"
      bg="white"
    >
      <HStack>
        <FontList />
        {/* <VStack overflowY={"scroll"} maxH={"calc(300px - 2rem)"}>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
          <Box>fdaf</Box>
        </VStack> */}
        <TextPreview />
      </HStack>
    </Flex>
  );
}

function FontList() {
  const fontSourceURL = "https://api.fontsource.org/fontlist";
  const [isLoadingFonts, setIsLoadingFonts] = useState(false);
  const [fonts, setFonts] = useState<string[]>([]);

  async function loadFonts() {
    const fonts = await (await fetch(fontSourceURL)).json();
    setIsLoadingFonts(false);

    const googleFonts = Object.keys(fonts).filter(
      (font) => fonts[font] === "google"
    );

    setFonts([...googleFonts]);
  }

  useEffect(() => {
    setIsLoadingFonts(true);
    loadFonts();
  }, []);

  return (
    <VStack
      spacing={2}
      textAlign={"left"}
      overflowY={"hidden"}
      maxH={"calc(300px - 2rem)"}
    >
      {isLoadingFonts && <Box>Loading...</Box>}
      {fonts.map((font, idx) => (
        <Box key={idx} borderRadius={"md"}>
          <Text className="theme-font" fontSize={"xs"}>
            {font}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

function TextPreview() {
  const [text, setText] = useState("");

  function onChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <Grid gridTemplateRows={"auto 1fr"} h="100%">
      <Input
        type={"text"}
        size="xs"
        placeholder="Type something"
        onChange={onChangeText}
        w="100%"
      />
      <Flex justifyContent={"center"} alignItems={"center"} minW="200px">
        <Text className="theme-font" fontSize={"md"}>
          {text || "Love is in the air"}
        </Text>
      </Flex>
    </Grid>
  );
}
