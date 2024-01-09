import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { COLOR_SCHEME } from "../utils";
import { FaChevronRight, FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card variant="elevated" key={project.projectName} size="sm">
      <CardHeader>
        <VStack>
          <HStack justifyContent={"space-between"} w={"100%"}>
            <Box px={2} align="left">
              <Text fontWeight={600}>{project.projectName}</Text>
              <HStack>
                {project.links.github && (
                  <Button
                    as={Link}
                    href={project.links.github}
                    target="_blank"
                    variant="link"
                    colorScheme={COLOR_SCHEME}
                    leftIcon={<FaGithub />}
                  >
                    Github
                  </Button>
                )}
                |
                {project.links.website && (
                  <Button
                    as={Link}
                    href={project.links.website}
                    target="_blank"
                    variant="link"
                    colorScheme={COLOR_SCHEME}
                    leftIcon={<FaGlobeAmericas />}
                  >
                    Website
                  </Button>
                )}
                {project.links.colab && (
                  <Button
                    as={Link}
                    href={project.links.colab}
                    target="_blank"
                    variant="link"
                    colorScheme={COLOR_SCHEME}
                    leftIcon={<SiGooglecolab />}
                  >
                    Google Colab
                  </Button>
                )}
              </HStack>
            </Box>
            <Box>
              <Text px={2} fontWeight={300}>
                {project.fromDate} -{" "}
                {project.currentlyWorking ? "Present" : project.toDate}
              </Text>
            </Box>
          </HStack>
        </VStack>
      </CardHeader>
      <CardBody>
        <Flex>
          <Image src={project.image} h={50} />
          <List align="left" spacing={1}>
            <ListItem>
              <ListIcon
                boxSize={4}
                as={FaChevronRight}
                color={`${COLOR_SCHEME}.500`}
              />
              {project.details[0]}
            </ListItem>
            {showDetails &&
              project.details.slice(1).map((item, index) => (
                <ListItem key={index}>
                  <ListIcon
                    boxSize={4}
                    as={FaChevronRight}
                    color={`${COLOR_SCHEME}.500`}
                  />
                  {item}
                </ListItem>
              ))}
            <Button
              variant="link"
              colorScheme={COLOR_SCHEME}
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Show Less" : "Show More"}
            </Button>
          </List>
        </Flex>
      </CardBody>
      <CardFooter flexWrap={"wrap"} >
        {project.tools.map((tool, index) => (
          <Badge key={index} colorScheme={COLOR_SCHEME} m={0.5}  >
            {tool}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}

export default function Project({ projects }) {
  return (
    <Container maxW={"3xl"} id="Project">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${COLOR_SCHEME}.400`} fontWeight={800}>
              04
            </Text>
            <Text fontWeight={800}>Project</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          {projects.map((proj, index) => (
            <ProjectCard project={proj} key={index} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
