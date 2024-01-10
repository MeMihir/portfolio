import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { COLOR_SCHEME } from "../utils";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

function CertificationCard({ certs }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const CertificateModal = (
    <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader color={"white"}>{certs.certificateName}</ModalHeader>
        <ModalBody>
          {/* <Box w={"70vw"} h={"50vh"} > */}
            <iframe
              title="certificate"
              src={certs.document}
              className="certificate"
              frameBorder={0}
            ></iframe>
          {/* </Box> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      {CertificateModal}
      <Box bottom w={"45%"} mx={"1.5%"}>
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
          <CardHeader>
            <Box px={2}>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {certs.certificateName}
              </Heading>
              <Text color={"gray.400"}>{certs.institution}</Text>
            </Box>
          </CardHeader>
          <CardBody textAlign={"center"}>
            <VStack>
              {/* <Image src={certs.image} h={50} /> */}
              <Text px={2} fontWeight={300}>
                Date Issued: {certs.dateIssued}
              </Text>
              {certs.dateExpires && (
                <Text px={2} fontWeight={300}>
                  Date Expired: {certs.dateExpires}
                </Text>
              )}
              {certs.credentials && (
                <Text px={2} fontWeight={300}>
                  Credentials: {certs.credentials}
                </Text>
              )}
              <ButtonGroup variant="ghost" isAttached size={"xs"}>
                {certs.link && (
                  <Button
                    as={"a"}
                    href={certs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    colorScheme={COLOR_SCHEME}
                    rightIcon={<FaExternalLinkAlt />}
                  >
                    Verify Credential
                  </Button>
                )}
                <Button
                  href={certs.docuemnt}
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme={COLOR_SCHEME}
                  rightIcon={<FaFilePdf />}
                  onClick={onOpen}
                >
                  View Certificate
                </Button>
              </ButtonGroup>
            </VStack>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}

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
        <HStack px={4} spacing={4} flexWrap="wrap">
          {certifications.map((certs, index) => (
            <CertificationCard certs={certs} key={index} />
          ))}
        </HStack>
      </Stack>
    </Container>
  );
}
