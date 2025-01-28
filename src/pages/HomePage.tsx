import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import TrackGrid from "../components/TrackGrid";

const HomePage = () => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });

  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show when={isLargeScreen}>
        <GridItem area="aside" paddingX={5} paddingY={2}>
          <Text>Aside</Text>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <h1>Library</h1>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <h2>Filter</h2>
            </Box>
            <h2>Sort</h2>
          </Flex>
        </Box>
        <TrackGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
