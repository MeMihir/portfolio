import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  DarkMode,
  Divider,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { COLOR_SCHEME } from "./utils";
import ScrollSpy from "./components/ScrollSpy";

import DATA from "./data.json";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Certifications from "./components/Certifications";

const { ABOUT, EDUCATION, EXPERIENCE, PROJECTS, CERTIFICATION, RESEARCH } =
  DATA;

const ProfileDisplay = () => {
  // const router = useRouter();
  const color = COLOR_SCHEME;

  const firstName = "Mihir";
  const lastName = "Pavuskar";
  const email = "pavuskar@usc.edu";
  const phone = "+1 (213) 691 9326";
  const location = "Los Angeles, CA";
  const { socials, about, programmingLanguages, tools, languages, hobbies } =
    ABOUT;
  const education = EDUCATION;
  const publications = [];
  const [summary, setSummary] = useState("");
  const [skillsCategory, setSkillsCategory] = useState("programmingLanguages");
  const skillsCategories = [
    {
      name: "Programming Languages",
      value: "programmingLanguages",
    },
    {
      name: "Tools / Frameworks",
      value: "tools",
    },
    {
      name: "Languages",
      value: "languages",
    },
  ];

  const sectionItems = [
    "Home", // Add the IDs of your sections here
    "About",
    "Experience",
    "Education",
    "Project",
    "Certification",
    "Publications",
    "Skills",
    "Hobbies",
    "Summary",
  ];

  const [role, setRole] = useState("soft");

  useEffect(() => {
    const role_path = window.location.pathname[1];
    const roles = ["", "data", "aiml", "soft"];
    console.log(role_path, roles[role_path]);
    setRole(roles[role_path] || "soft");
  }, []);

  const Starts = (
    <>
      <div id="starts"></div>
      <div id="starts2"></div>
      <div id="starts3"></div>
    </>
  );

  const About = (
    <Container maxW={"3xl"} id="About">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              01
            </Text>
            <Text fontWeight={800}>About</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Text color={"white"} fontSize={"xl"} px={4}>
          {about}
        </Text>
      </Stack>
    </Container>
  );

  const Education = (
    <Container maxW={"3xl"} id="Education">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>Education</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <HStack px={4} spacing={4}>
          {education.map((edu, index) => (
            <Card
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              // bg={useColorModeValue('white', 'gray.800')}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
            >
              <CardBody
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `logos/${edu.logo}.png`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={300}
                  objectFit={"cover"}
                  src={`logos/${edu.logo}.png`}
                  alt="#"
                />
              </CardBody>
              <Stack pt={10} align={"center"}>
                <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                  {edu.universityName}
                </Heading>
                <Text
                  // color={"whi"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  {edu.degree}
                </Text>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  {edu.fromDate} - {edu.toDate}
                </Text>
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={800} fontSize={"xl"}>
                    {edu.score}
                  </Text>
                  <Text>GPA</Text>
                </Stack>
              </Stack>
            </Card>
          ))}
        </HStack>
      </Stack>
    </Container>
  );

  const Publications = (
    <Container maxW={"3xl"} id="Publications">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              06
            </Text>
            <Text fontWeight={800}>Publications / Patents</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          {publications.map((pub, index) => (
            <Box bottom key={index}>
              <Card variant="elevated" key={pub.paperTitle} size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      {/* <Image src={pub.image} h={50} /> */}
                      <Box px={2} align="left">
                        <Text fontWeight={600}>{pub.paperTitle}</Text>
                        <Text>{pub.publication}</Text>
                      </Box>
                    </HStack>
                    <Text px={2} fontWeight={300}>
                      {pub.date}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {pub.details.map((item, index) => (
                        <ListItem key={index}>
                          <ListIcon
                            boxSize={4}
                            as={FaChevronRight}
                            color={`${color}.500`}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <IconButton
                    // as={Link}
                    href={pub.link}
                    target="_blank"
                    aria-label={`${pub.paperTitle}`}
                    icon={<FaExternalLinkAlt />}
                    size="xs"
                    variant="ghost"
                    colorScheme={COLOR_SCHEME}
                  />
                </CardFooter>
              </Card>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );

  const Skills = (
    <Container maxW={"3xl"} id="Skills">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              07
            </Text>
            <Text fontWeight={800}>Skills</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Center>
          <ButtonGroup
            variant="outline"
            flexDir={["column", "column", "row", "row"]}
          >
            {skillsCategories.map((category) => (
              <Button
                key={category.value}
                colorScheme={
                  skillsCategory === category.value ? `${color}` : "gray"
                }
                onClick={() => setSkillsCategory(category.value)}
              >
                {category.name}
              </Button>
            ))}
          </ButtonGroup>
        </Center>
        <Stack px={4} spacing={4}>
          {skillsCategory === "programmingLanguages" && (
            <HStack flexWrap="wrap">
              {programmingLanguages.map((language) => (
                <Badge
                  key={language}
                  px={2}
                  py={1}
                  colorScheme={`${color}`}
                  variant="outline"
                >
                  {language}
                </Badge>
              ))}
            </HStack>
          )}
          {skillsCategory === "tools" && (
            <HStack flexWrap="wrap">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  px={2}
                  py={1}
                  colorScheme={`${color}`}
                  variant="outline"
                >
                  {tool}
                </Badge>
              ))}
            </HStack>
          )}
          {skillsCategory === "languages" && (
            <HStack flexWrap="wrap">
              {languages.map((language) => (
                <Badge
                  key={language}
                  px={2}
                  py={1}
                  colorScheme={`${color}`}
                  variant="outline"
                >
                  {language}
                </Badge>
              ))}
            </HStack>
          )}
        </Stack>
      </Stack>
    </Container>
  );

  const Hobbies = (
    <Container maxW={"3xl"} id="Hobbies">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              08
            </Text>
            <Text fontWeight={800}>Hobbies</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          <HStack flexWrap="wrap">
            {hobbies.map((hobby) => (
              <Badge
                key={hobby}
                px={2}
                py={1}
                colorScheme={`${color}`}
                variant="outline"
              >
                {hobby}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Container>
  );

  const Summary = (
    <Container maxW={"3xl"} id="Summary">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              09
            </Text>
            <Text fontWeight={800}>Summary</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          <Textarea readOnly minH={"20rem"} maxH={"20rem"} value={summary} />
        </Stack>
      </Stack>
    </Container>
  );

  return (
    <>
      <DarkMode className="darkBG">
        {Starts}
        <ScrollSpy items={sectionItems} offset={50}>
          <Hero
            firstName={firstName}
            lastName={lastName}
            role={role}
            color={COLOR_SCHEME}
            email={email}
            socials={socials}
            phone={phone}
          />
          {About}
          <Experience experience={EXPERIENCE} />
          {Education}
          <Project projects={PROJECTS} role={role} />
          <Certifications certifications={CERTIFICATION} />
          {/* {Publications} */}
          {Skills}
          {Hobbies}
          {Summary}
        </ScrollSpy>
      </DarkMode>
    </>
  );
};

export default ProfileDisplay;
