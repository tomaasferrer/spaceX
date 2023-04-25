import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Flex,
  Spacer,
  Tag,
  Text,
  Icon,
  Button,
  Spinner,
  Card,
  CardBody,
  CardFooter,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";

import { LaunchContext } from "../service/LaunchContext";
import * as API from "../service/launches";

import { HiCalendarDays } from "react-icons/hi2";
import dayjs from "dayjs";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
      .then((data) => {
        setLaunch(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [launchId]);

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
    <LaunchContext.Provider value={{ launch }}>
      <Center h="900px">
        <Card maxW="lg" bg="gray.100">
          <CardBody>
            <Flex>
              <Text fontSize="2x1">
                Mission <strong>{launch.mission_name} </strong>(
                {launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Flex align="center">
              <Icon as={HiCalendarDays} />
              <Text fontSize="sm" ml="1">
                {dayjs(launch.launch_date_local)
                  .locale("es")
                  .format("D MMMM, YYYY")}
              </Text>
            </Flex>
          </CardBody>
          <Image
            objectFit="cover"
            src={`${launch.links?.mission_patch_small}`}
            alt="Chakra UI"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Divider />

            <Link
              to={`/rockets/${launch.rocket?.rocket_id || ""}`}
              title={
                launch.rocket?.rocket_id
                  ? "See rocket details"
                  : "Not available"
              }
            >
              <Button flex="1" variant="ghost" m={1} disabled={!launch.rocket}>
                Rocket Details
              </Button>
            </Link>

            <Link to={launch.links?.video_link ? launch.links.video_link : "#"}>
              <Button
                flex="1"
                variant="ghost"
                m={1}
                title={
                  launch.links?.video_link
                    ? "Watch on YouTube"
                    : "Not available"
                }
              >
                {launch.links?.video_link ? "Youtube" : "Youtube"}
              </Button>
            </Link>

            <Link to={launch.links?.wikipedia ? launch.links?.wikipedia : "#"}>
              <Button
                flex="1"
                variant="ghost"
                m={1}
                title={
                  launch.links?.wikipedia ? "See on Wikipedia" : "Not available"
                }
              >
                {launch.links?.wikipedia ? "Wikipedia" : "Wikipedia"}
              </Button>
            </Link>

            <Link
              to={launch.links?.article_link ? launch.links?.article_link : "#"}
            >
              <Button
                flex="1"
                variant="ghost"
                m={1}
                title={
                  launch.links?.article_link
                    ? "See the Article"
                    : "Not available"
                }
              >
                {launch.links?.article_link ? "Article" : "Article"}
              </Button>
            </Link>

            
          </CardFooter>
        </Card>
      </Center>
    </LaunchContext.Provider>
  );
}
