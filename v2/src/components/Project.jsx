import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CATEGORIES, COLOR_SCHEME } from "../utils";
import { FaChevronRight, FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";
import { useGATracking } from "../hooks/GAHook";

function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card
      key={project.projectName}
      size="sm"
      bgColor={"rgba(45,55,72,0.2)"}
      _hover={{ bgColor: "rgba(45,55,72,0.5)" }}
      transition={"0.5s ease"}
    >
      <CardHeader>
        <VStack>
          <HStack justifyContent={"space-between"} w={"100%"}>
            <Box px={2} align="left" maxW={"70%"}>
              <Text fontWeight={600}>{project.projectName}</Text>
            </Box>
            <Box>
              <Text px={2} fontWeight={300}>
                {project.fromDate} -{" "}
                {project.currentlyWorking ? "Present" : project.toDate}
              </Text>
            </Box>
          </HStack>
          <ButtonGroup justifyContent={"start"} w={"100%"} >
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
          </ButtonGroup>
        </VStack>
      </CardHeader>
      <CardBody>
        <Flex mb={2}>
          {/* <Image src={project.image} h={50} /> */}
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
        <hr />
        <HStack flexWrap={"wrap"} mt={2}>
          {project.tools.map((tool, index) => (
            <Badge
              key={index}
              colorScheme={COLOR_SCHEME}
              m={0.5}
              borderRadius={"full"}
            >
              {tool}
            </Badge>
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
}

export default function Project({ projects, role }) {
  const [category, setCategory] = useState("sde");
  const [currProjects, setCurrProjects] = useState([]);
  const ref = useGATracking("Project");

  useEffect(() => {
    setCategory(role);
    setCurrProjects(projects.filter((project) => project.tags.includes(role)));
  }, [role, projects]);

  useEffect(() => {
    setCurrProjects(
      projects.filter((project) => project.tags.includes(category))
    );
  }, [category, projects]);

  return (
    <Container maxW={"3xl"} id="Project" ref={ref} >
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
        <Center>
          <ButtonGroup
            variant="outline"
            flexDir={["column", "column", "row", "row"]}
          >
            {Object.keys(CATEGORIES).map((cat, index) => (
              <Button
                key={index}
                colorScheme={category === cat ? `${COLOR_SCHEME}` : "gray"}
                onClick={() => setCategory(cat)}
              >
                {CATEGORIES[cat]}
              </Button>
            ))}
          </ButtonGroup>
        </Center>
        <Stack px={4} spacing={4}>
          {currProjects.map((proj, index) => (
            <ProjectCard project={proj} key={index} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
