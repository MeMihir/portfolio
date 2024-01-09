import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { COLOR_SCHEME } from "../utils";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Certifications({ certifications }) {
  return (
    <Container maxW={"3xl"} id="Certification">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${COLOR_SCHEME}.400`} fontWeight={800}>
              05
            </Text>
            <Text fontWeight={800}>Certification / Achievements</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <HStack px={4} spacing={4} flexWrap="wrap" >
          {certifications.map((certs, index) => (
            <Box bottom key={index} w={"45%"} mx={"1.5%"} >
              <Card
                role={"group"}
                maxW={"330px"}
                w={"full"}
                // bg={useColorModeValue('white', 'gray.800')}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
								minH={"15rem"}
              >
                <CardHeader textAlign={"center"}>
                  <VStack>
                    {/* <Image src={certs.image} h={50} /> */}
                    <Box px={2}>
                      <Heading
                        fontSize={"2xl"}
                        fontFamily={"body"}
                        fontWeight={500}
                      >
                        {certs.certificateName}
                      </Heading>
                      <Text>{certs.institution}</Text>
                      <IconButton
                        // as={Link}
                        href={certs.link}
                        target="_blank"
                        aria-label={`${certs.certificateName}`}
                        icon={<FaExternalLinkAlt />}
                        size="xs"
                        variant="ghost"
                        colorScheme={COLOR_SCHEME}
                      />
                    </Box>
                    <Text px={2} fontWeight={300}>
                      {certs.dateIssued}
                    </Text>
                    <Text px={2} fontWeight={300}>
                      {certs.score}
                    </Text>
                  </VStack>
                </CardHeader>
              </Card>
            </Box>
          ))}
        </HStack>
      </Stack>
    </Container>
  );
}
