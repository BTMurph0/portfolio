import { Container, Heading, Text } from "@chakra-ui/react";
import ProjectsLink from "../components/ProjectsLink";

export function Dashboard() {
  return (
    <>
      <Container mt="100px" bg="gray" maxWidth="960px">
        <Heading>Barry Murphy</Heading>
        <Heading as="h3">Software Developer</Heading>
        <Text>Welcome to my portfolio site!</Text>
      </Container>
      <ProjectsLink />
    </>
  );
}
