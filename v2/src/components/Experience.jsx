import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronRight, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { COLOR_SCHEME } from "../utils";

export default function Experience({ experience }) {
  return (
    <Container maxW={"3xl"} id="Experience">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${COLOR_SCHEME}.400`} fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>Experience</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          {experience.map((exp, index) => (
            <Box bottom key={index}>
              <Card
                bgColor={"rgba(45,55,72,0.2)"}
                _hover={{ bgColor: "rgba(45,55,72,0.5)" }}
                transition={"0.5s ease"}
                key={exp.companyName}
                size="sm"
                // bgColor={"#1d232e"}
              >
                <CardHeader>
                  <Flex justifyContent="space-between">
                    {/* <Image src={exp.image} h={50} /> */}
                    <Box px={2} align="left">
                      <Text fontWeight={600}>{exp.role}</Text>
                      <Button
                        overflowWrap={"break-word"}
                        variant="link"
                        colorScheme={COLOR_SCHEME}
                        rightIcon={<GoLinkExternal />}
                        as={Link}
                        href={exp.links.website}
                        target="_blank"
                      >
                        {exp.companyName}
                      </Button>
                      <Text>{exp.location}</Text>
                    </Box>
                    <Box>
                      <Text px={2} fontWeight={300}>
                        {exp.fromDate} -{" "}
                        {exp.currentlyWorking ? "Present" : exp.toDate}
                      </Text>
                      <ButtonGroup
                        variant="ghost"
                        colorScheme={COLOR_SCHEME}
                        size="sm"
                        alignItems={"end"}
                        alignSelf={"end"}
                      >
                        {exp.links.linkedin && (
                          <IconButton
                            as={Link}
                            href={exp.links.linkedin}
                            target="_blank"
                            aria-label={"LinkedIn"}
                            icon={<FaLinkedin fontSize="20px" />}
                          />
                        )}
                        {exp.links.instagram && (
                          <IconButton
                            as={Link}
                            href={exp.links.instagram}
                            target="_blank"
                            aria-label={"instagram"}
                            icon={<FaInstagram fontSize="20px" />}
                          />
                        )}
                      </ButtonGroup>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Stack>
                    <List align="left" spacing={1}>
                      {exp.details.map((item, index) => (
                        <ListItem key={index}>
                          <ListIcon
                            boxSize={4}
                            as={FaChevronRight}
                            color={`${COLOR_SCHEME}.500`}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                    <hr />
                    <HStack w={"100%"} flexWrap="wrap">
                      {exp.tools.map((tech, index) => (
                        <Badge
                          key={index}
                          px={2}
                          py={1}
                          colorScheme={`${COLOR_SCHEME}`}
                          borderRadius={"full"}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
