import { useState, useEffect } from "react";
import { Spinner, Flex, Box, AbsoluteCenter, Grid } from "@chakra-ui/react";

import { LaunchItem } from "./LaunchItem";
import { LaunchContext } from "../service/LaunchContext";
import * as API from "../service/launches";

export function LaunchList() {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.getAllLaunches()
      .then((data) => {
        setLaunches(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <Flex align="center" justify="center" h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <LaunchContext.Provider value={{ launches }}>
      <>
        <Box position="relative" h="100px">
          <AbsoluteCenter bg="white" p="1" color="black" axis="both">
            SPACE X MISSION
          </AbsoluteCenter>
        </Box>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={1}
        >
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {...launch} />
          ))}
        </Grid>
      </>
    </LaunchContext.Provider>
  );
}
