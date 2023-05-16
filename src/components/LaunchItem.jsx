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
    <Box boxShadow='dark-lg' p='5' m="4" borderRadius="lg" bg='white' w="90%">
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
