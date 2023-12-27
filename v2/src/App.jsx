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
  Divider,
  Fade,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Textarea,
  VStack,
  createIcon,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobeAmericas,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { COLOR_SCHEME } from './utils'

import DATA from './data.json';

const { ABOUT, EDUCATION, EXPERIENCE, PROJECTS, CERTIFICATION, RESEARCH } = DATA

const ProfileDisplay = () => {
  // const router = useRouter();
  const toast = useToast();
  const color = COLOR_SCHEME;

  const firstName = "Mihir"
  const lastName = "Pavuskar"
  const role = "Software Engineer";
  const email = 'pavuskar@usc.edu'
  const phone = "+1 (213) 691 9326"
  const location = "Los Angeles, CA"
  const { socials, about, programmingLanguages, tools, languages, hobbies } =  ABOUT
  const experience = EXPERIENCE
  const education = EDUCATION
  const certifications = CERTIFICATION
  const projects = PROJECTS
  const [publications, setPublications] = useState([]);
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

  const Arrow = createIcon({
    displayName: "Arrow",
    viewBox: "0 0 72 24",
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
        fill="currentColor"
      />
    ),
  });

  const Header = (
    <Container maxW={"3xl"} id="hero" height={"100vh"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
        pt={{ base: 36, md: 52 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          {`${firstName} ${lastName}`} <br />
          <Text as={"span"} color={`${color}.400`}>
            {role}
          </Text>
        </Heading>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={color}
            bg={`${color}.400`}
            rounded={"full"}
            px={6}
            _hover={{
              bg: `${color}.500`,
            }}
            // onClick={() => {
            //   scrollBy({ top: window.innerHeight, behavior: "smooth" });
            // }}
          >
            {"View Profile"}
          </Button>
          <Box>
            <Icon
              as={Arrow}
              color={useColorModeValue("gray.800", "gray.300")}
              w={71}
              position={"absolute"}
              right={-71}
              top={"10px"}
            />
            <Text
              fontSize={"lg"}
              fontFamily={"Caveat"}
              position={"absolute"}
              right={"-85px"}
              top={"-15px"}
              transform={"rotate(10deg)"}
            >
              Click me!
            </Text>
            <VStack spacing={4} align="center">
              <ButtonGroup
                spacing={4}
                mt={4}
                colorScheme={color}
                variant="ghost"
              >
                {email && (
                  <IconButton
                    // as={Link}
                    href={`mailto:${email}`}
                    aria-label={"Email"}
                    icon={<FaEnvelope fontSize="20px" />}
                  />
                )}
                {phone && (
                  <IconButton
                    // as={Link}
                    href={`tel:${phone}`}
                    aria-label={"Phone"}
                    icon={<FaPhone fontSize="20px" />}
                  />
                )}
                {socials.linkedIn && (
                  <IconButton
                    // as={Link}
                    href={socials.linkedIn}
                    target="_blank"
                    aria-label={"LinkedIn"}
                    icon={<FaLinkedin fontSize="20px" />}
                  />
                )}
                {socials.github && (
                  <IconButton
                    // as={Link}
                    href={socials.github}
                    target="_blank"
                    aria-label={"GitHub"}
                    icon={<FaGithub fontSize="20px" />}
                  />
                )}
                {socials.twitter && (
                  <IconButton
                    // as={Link}
                    href={socials.twitter}
                    target="_blank"
                    aria-label={"Twitter"}
                    icon={<FaTwitter fontSize="20px" />}
                  />
                )}
                {socials.portfolio && (
                  <IconButton
                    // as={Link}
                    href={socials.portfolio}
                    target="_blank"
                    aria-label={"Portfolio"}
                    icon={<FaGlobeAmericas fontSize="20px" />}
                  />
                )}
              </ButtonGroup>
            </VStack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );

  const About = (
    <Container maxW={"3xl"} id="about">
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
        <Text color={"gray.600"} fontSize={"xl"} px={4}>
          {about}
        </Text>
      </Stack>
    </Container>
  );

  const Experience = (
    <Container maxW={"3xl"} id="experience">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>Experience</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4} color="black">
          {experience.map((exp, index) => (
            <Box bottom key={index}>
              <Card key={exp.companyName} size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      {/* <Image src={exp.image} h={50} /> */}
                      <Box px={2} align="left">
                        <Text fontWeight={600}>{exp.companyName}</Text>
                        <Text>{exp.role}</Text>
                      </Box>
                    </HStack>
                    <Text px={2} fontWeight={300}>
                      {exp.fromDate} -{" "}
                      {exp.currentlyWorking ? "Present" : exp.toDate}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {exp.details.map((item, index) => (
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
              </Card>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );

  const Education = (
    <Container maxW={"3xl"} id="education">
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
        <Stack px={4} spacing={4} color="black">
          {education.map((edu, index) => (
            <Box bottom key={index}>
              <Card key={edu.universityName} size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      {/* <Image src={edu.image} h={50} /> */}
                      <Box px={2} align="left">
                        <Text fontWeight={600}>{edu.universityName}</Text>
                        <Text>{edu.degree}</Text>
                        <Text>{edu.major}</Text>
                      </Box>
                    </HStack>
                    <VStack>
                      <Text px={2} fontWeight={300}>
                        {edu.fromDate} -{" "}
                        {edu.currentlyWorking ? "Present" : edu.toDate}
                      </Text>
                      <Text px={2} fontWeight={300}>
                        {edu.score}
                      </Text>
                    </VStack>
                  </Flex>
                </CardHeader>
              </Card>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );

  const Project = (
    <Container maxW={"3xl"} id="project">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              04
            </Text>
            <Text fontWeight={800}>Project</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4} color="black">
          {projects.map((proj, index) => (
            <Box bottom key={index}>
              <Card key={proj.projectName} size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      {/* <Image src={proj.image} h={50} /> */}
                      <Box px={2} align="left">
                        <Text fontWeight={600}>{proj.projectName}</Text>
                        <Text>{proj.role}</Text>
                      </Box>
                    </HStack>
                    <Text px={2} fontWeight={300}>
                      {proj.fromDate} -{" "}
                      {proj.currentlyWorking ? "Present" : proj.toDate}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {proj.details.map((item, index) => (
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
              </Card>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );

  const Certification = (
    <Container maxW={"3xl"} id="certification">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              05
            </Text>
            <Text fontWeight={800}>Certification / Achievements</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4} color="black">
          {certifications.map((certs, index) => (
            <Box bottom key={index}>
              <Card key={certs.certificateName} size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      {/* <Image src={certs.image} h={50} /> */}
                      <Box px={2} align="left">
                        <Text fontWeight={600}>{certs.certificateName}</Text>
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
                    </HStack>
                    <VStack>
                      <Text px={2} fontWeight={300}>
                        {certs.dateIssued}
                      </Text>
                      <Text px={2} fontWeight={300}>
                        {certs.score}
                      </Text>
                    </VStack>
                  </Flex>
                </CardHeader>
              </Card>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );

  const Publications = (
    <Container maxW={"3xl"} id="publications">
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
        <Stack px={4} spacing={4} color="black">
          {publications.map((pub, index) => (
            <Box bottom key={index}>
              <Card key={pub.paperTitle} size="sm">
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
    <Container maxW={"3xl"} id="skills">
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
        <Stack px={4} spacing={4} color="black">
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
    <Container maxW={"3xl"} id="hobbies">
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
        <Stack px={4} spacing={4} color="black">
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
    <Container maxW={"3xl"} id="summary">
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
        <Stack px={4} spacing={4} color="black">
          <Textarea readOnly minH={"20rem"} maxH={"20rem"} value={summary} />
        </Stack>
      </Stack>
    </Container>
  );

  return (
    <>
      <Box p={4} mt={"4rem"}>
        {Header}
        {About}
        {Experience}
        {Education}
        {Project}
        {Certification}
        {Publications}
        {Skills}
        {Hobbies}
        {Summary}
        
      </Box>
    </>
  );
};

export default ProfileDisplay;
