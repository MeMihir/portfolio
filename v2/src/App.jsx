import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Container,
  DarkMode,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { COLOR_SCHEME } from "./utils";
import ScrollSpy from "./components/ScrollSpy";

import DATA from "./data.json";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Certifications from "./components/Certifications";
import { useGATracking } from "./hooks/GAHook";

const { ABOUT, EDUCATION, EXPERIENCE, PROJECTS, CERTIFICATION } =
  DATA;

const ProfileDisplay = () => {
  // const router = useRouter();
  const color = COLOR_SCHEME;

  const firstName = "Mihir";
  const lastName = "Pavuskar";
  const location = "Seattle, WA";
  const { socials, about, programmingLanguages, tools, languages, hobbies } =
    ABOUT;
  const education = EDUCATION;
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
    "Skills",
    "Hobbies",
    "Contact",
  ];

  const [role, setRole] = useState("sde");

  const aboutRef = useGATracking("About");
  const educationRef = useGATracking("Education");
  const skillsRef = useGATracking("Skills");
  const hobbiesRef = useGATracking("Hobbies");  
  const contactRef = useGATracking("Contact");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  useEffect(() => {
    const role_path = window.location.pathname[1];
    const roles = ["", "data", "aiml", "sde"];
    console.log(role_path, roles[role_path]);
    setRole(roles[role_path] || "sde");
  }, []);

  const About = (
    <Container maxW={"3xl"} id="About" ref={aboutRef} >
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
    <Container maxW={"3xl"} id="Education" ref={educationRef} >
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
        <HStack px={4} spacing={4} flexDir={["column", "column", "row", "row"]} > 
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
              mt={2}
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

  // const Publications = (
  //   <Container maxW={"3xl"} id="Publications">
  //     <Stack
  //       as={Box}
  //       textAlign={"center"}
  //       spacing={{ base: 8, md: 14 }}
  //       pb={{ base: 20, md: 36 }}
  //     >
  //       <Stack align="center" direction="row" px={4}>
  //         <HStack mx={4}>
  //           <Text color={`${color}.400`} fontWeight={800}>
  //             06
  //           </Text>
  //           <Text fontWeight={800}>Publications / Patents</Text>
  //         </HStack>
  //         <Divider orientation="horizontal" />
  //       </Stack>
  //       <Stack px={4} spacing={4}>
  //         {publications.map((pub, index) => (
  //           <Box bottom key={index}>
  //             <Card variant="elevated" key={pub.paperTitle} size="sm">
  //               <CardHeader>
  //                 <Flex justifyContent="space-between">
  //                   <HStack>
  //                     {/* <Image src={pub.image} h={50} /> */}
  //                     <Box px={2} align="left">
  //                       <Text fontWeight={600}>{pub.paperTitle}</Text>
  //                       <Text>{pub.publication}</Text>
  //                     </Box>
  //                   </HStack>
  //                   <Text px={2} fontWeight={300}>
  //                     {pub.date}
  //                   </Text>
  //                 </Flex>
  //               </CardHeader>
  //               <CardBody>
  //                 <Flex>
  //                   <List align="left" spacing={3}>
  //                     {pub.details.map((item, index) => (
  //                       <ListItem key={index}>
  //                         <ListIcon
  //                           boxSize={4}
  //                           as={FaChevronRight}
  //                           color={`${color}.500`}
  //                         />
  //                         {item}
  //                       </ListItem>
  //                     ))}
  //                   </List>
  //                 </Flex>
  //               </CardBody>
  //               <CardFooter>
  //                 <IconButton
  //                   // as={Link}
  //                   href={pub.link}
  //                   target="_blank"
  //                   aria-label={`${pub.paperTitle}`}
  //                   icon={<FaExternalLinkAlt />}
  //                   size="xs"
  //                   variant="ghost"
  //                   colorScheme={COLOR_SCHEME}
  //                 />
  //               </CardFooter>
  //             </Card>
  //           </Box>
  //         ))}
  //       </Stack>
  //     </Stack>
  //   </Container>
  // );

  const Skills = (
    <Container maxW={"3xl"} id="Skills" ref={skillsRef}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
        minHeight={"40rem"}
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
    <Container maxW={"3xl"} id="Hobbies" ref={hobbiesRef} >
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

  const Contact = (
    <Container maxW={"3xl"} id="Contact" ref={contactRef}>
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
            <Text fontWeight={800}>Contact</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Box px={4}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);

              try {
                const res = await fetch(
                  "https://script.google.com/macros/s/AKfycbyLJ9X5dFHDaRG7zfaUOnMEA6-jotAKB6RRpxgzaYh5EkNkYtYXrcVwMPNcg7V90QLajg/exec",
                  {
                    method: "POST",
                    body: JSON.stringify(formData),
                  }
                );

                if (!res.ok) {
                  throw new Error("Failed to send message");
                }

                toast({
                  title: "Message sent successfully",
                });
                setFormData({
                  name: "",
                  email: "",
                  message: "",
                });
              } catch (error) {
                console.error("Failed to send message:", error);
              } finally {
                setIsSubmitting(false);
              }
            }}
          >
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                type="text" 
                placeholder="Your name" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                type="email" 
                placeholder="your.email@example.com" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea 
                placeholder="Your message" 
                rows={6} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme={color}
                size="lg"
                fontSize="md"
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
  

  // const Summary = (
  //   <Container maxW={"3xl"} id="Summary">
  //     <Stack
  //       as={Box}
  //       textAlign={"center"}
  //       spacing={{ base: 8, md: 14 }}
  //       pb={{ base: 20, md: 36 }}
  //     >
  //       <Stack align="center" direction="row" px={4}>
  //         <HStack mx={4}>
  //           <Text color={`${color}.400`} fontWeight={800}>
  //             09
  //           </Text>
  //           <Text fontWeight={800}>Summary</Text>
  //         </HStack>
  //         <Divider orientation="horizontal" />
  //       </Stack>
  //       <Stack px={4} spacing={4}>
  //         <Textarea readOnly minH={"20rem"} maxH={"20rem"} value={summary} />
  //       </Stack>
  //     </Stack>
  //   </Container>
  // );

  return (
    <>
      <DarkMode className="darkBG">
        <ScrollSpy items={sectionItems} offset={50}>
          <Hero
            firstName={firstName}
            lastName={lastName}
            role={role}
            color={COLOR_SCHEME}
            socials={socials}
            location={location}
          />
          {About}
          <Experience experience={EXPERIENCE} />
          {Education}
          <Project projects={PROJECTS} role={role} />
          <Certifications certifications={CERTIFICATION} />
          {/* {Publications} */}
          {Skills}
          {Hobbies}
          {/* {Summary} */}
          {Contact}
        </ScrollSpy>
      </DarkMode>
    </>
  );
};

export default ProfileDisplay;
