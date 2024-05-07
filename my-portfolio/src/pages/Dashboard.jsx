import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ProjectsLink from "../components/ProjectsLink";

export function Dashboard() {
  return (
    <>
      <Container mt="100px" maxWidth="960px">
        <Heading fontSize="3rem" color="#DBD8E3">Barry Murphy</Heading>
        <Heading fontSize="3rem" color="#DBD8E3" as="h3">Software Developer</Heading>
        <Text as="i" fontSize="2rem" marginTop="20px" color="#DBD8E3">JavaScript || React || Node.js || Express.js || PostgreSQL</Text>
        <Text fontSize="2rem" marginTop="20px" color="#DBD8E3">Welcome to my portfolio site! I'm a Software Developer from Manchester with a decade of experience of the Software Development Lifecycle as a Software QA and Product Owner. Click below to see my projects.</Text>
        <ProjectsLink />
        <Box my="100px"></Box>
      </Container>
      
    </>
  );
}
