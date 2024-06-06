import { Container, Box, Heading, Text, Button, VStack, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box as="header" textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to TechStartup
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Revolutionizing the way you do business with cutting-edge technology solutions.
          </Text>
        </Box>

        {/* Hero Section */}
        <Box as="section" textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <VStack spacing={4}>
            <Heading as="h2" size="xl">
              Empower Your Business
            </Heading>
            <Text fontSize="lg" color="gray.700">
              Our platform provides the tools you need to succeed in a competitive market.
            </Text>
            <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
              Get Started
            </Button>
          </VStack>
        </Box>

        {/* Features Section */}
        <Box as="section" py={10}>
          <VStack spacing={8}>
            <Heading as="h2" size="xl" textAlign="center">
              Features
            </Heading>
            <HStack spacing={8} justify="center">
              <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Image src="https://images.unsplash.com/photo-1699910618950-ed0b871c7fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMXxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 1" boxSize="100px" mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  Feature One
                </Heading>
                <Text color="gray.600">Description of feature one.</Text>
              </Box>
              <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMnxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 2" boxSize="100px" mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  Feature Two
                </Heading>
                <Text color="gray.600">Description of feature two.</Text>
              </Box>
              <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Image src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwM3xlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 3" boxSize="100px" mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  Feature Three
                </Heading>
                <Text color="gray.600">Description of feature three.</Text>
              </Box>
            </HStack>
          </VStack>
        </Box>

        {/* Footer Section */}
        <Box as="footer" textAlign="center" py={10} borderTopWidth="1px">
          <VStack spacing={4}>
            <Text fontSize="lg" color="gray.600">
              Follow us on social media
            </Text>
            <HStack spacing={4}>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </HStack>
            <Text fontSize="sm" color="gray.500">
              &copy; {new Date().getFullYear()} TechStartup. All rights reserved.
            </Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
