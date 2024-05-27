import { Container, Box, VStack, HStack, Input, Button, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { DatePicker } from "chakra-ui-date-input";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">TravelBooking</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Destinations</Button>
          <Button variant="link" color="white">Deals</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Search Section */}
      <VStack spacing={4} mt={8} align="center">
        <Heading size="md">Find Your Next Adventure</Heading>
        <HStack spacing={4} w="full" maxW="md">
          <Input placeholder="Enter destination" />
          <DatePicker placeholder="Select dates" />
          <Button leftIcon={<FaSearch />} colorScheme="blue">Search</Button>
        </HStack>
      </VStack>

      {/* Featured Destinations */}
      <Box mt={16}>
        <Heading size="lg" mb={4}>Featured Destinations</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box w="300px" p={4} boxShadow="md" borderRadius="md" mb={4}>
            <Image src="/images/destination1.jpg" alt="Destination 1" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Paris, France</Text>
            <Text>Experience the city of lights.</Text>
          </Box>
          <Box w="300px" p={4} boxShadow="md" borderRadius="md" mb={4}>
            <Image src="/images/destination2.jpg" alt="Destination 2" borderRadius="md" />
            <Text mt={2} fontWeight="bold">Tokyo, Japan</Text>
            <Text>Discover the land of the rising sun.</Text>
          </Box>
          <Box w="300px" p={4} boxShadow="md" borderRadius="md" mb={4}>
            <Image src="/images/destination3.jpg" alt="Destination 3" borderRadius="md" />
            <Text mt={2} fontWeight="bold">New York, USA</Text>
            <Text>The city that never sleeps.</Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;