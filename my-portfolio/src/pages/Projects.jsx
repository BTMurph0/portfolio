import { Link as ChakraLink, Box, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BiLogoPostgresql, BiLogoReact } from "react-icons/bi";
import { DiNodejs, DiJsBadge } from "react-icons/di";

export function Projects() {
  return (
    <Container mt="100px" maxWidth="960px">
      <Heading mb="50px" color="mediumblue" fontSize="3rem">My Projects</Heading>
      <Box>
        <ChakraLink href="https://resilient-alpaca-fd5bf3.netlify.app/" isExternal>
        <Heading color="purple" fontSize="2rem" as="h3">NC News</Heading>
        </ChakraLink>
        <Flex>
          <Text color="#DBD8E3">Tech stack:</Text>
          <Icon color="#DBD8E3" w="50px" h="30px" as={BiLogoPostgresql} />
          <Icon color="#DBD8E3" w="50px" h="30px" as={BiLogoReact} />
          <Icon color="#DBD8E3" w="50px" h="30px" as={DiJsBadge} />
          <Icon color="#DBD8E3" w="50px" h="50px" as={DiNodejs} />
        </Flex>
        <Text color="#DBD8E3">
          This is my first project. It's a news website I made as a project on
          the Northcoders NC bootcamp. It was created using PostgreSQL and
          Express.js for the backend and React for the frontend. Users are
          greeted with a list of user profiles they can choose to login as. By
          default they are the guest profile. They cannot comment or vote on
          articles as a guest but selecting a user profile uses useContext to
          unlock the comment and voting options.
        </Text>
      </Box>
    </Container>
  );
}
