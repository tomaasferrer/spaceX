import {
  Box,
  Text,
  Tag,
  Flex,
  Button,
  Spacer,
  Icon,
  Grid,
} from "@chakra-ui/react";
import { HiCalendarDays } from "react-icons/hi2";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg" w="900px">
      <Flex>
        <Text fontSize="2x1">
          Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>

      <Flex align="center">
        <Icon as={HiCalendarDays} />
        <Text fontSize="sm" ml="1">
          {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
        </Text>
      </Flex>
      <Link to={`/launch/${launch.flight_number}`}>
        <Button m={2} colorScheme="purple">
          More Details
        </Button>
      </Link>
    </Box>
  );
}
