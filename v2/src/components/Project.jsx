import { Box, Card, CardBody, CardHeader, Container, Divider, Flex, HStack, List, ListIcon, ListItem, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { COLOR_SCHEME } from '../utils'
import { FaChevronRight } from 'react-icons/fa'

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
            <Box bottom key={index}>
              <Card variant="elevated" key={proj.projectName} size="sm">
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
                            color={`${COLOR_SCHEME}.500`}
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
  )
}
